import * as nsfwjs from 'nsfwjs';

let model: nsfwjs.NSFWJS | null = null;

async function getModel() {
  if (model) return model;
  try {
    // Attempt to load the model. If the default URL fails, this will throw.
    model = await nsfwjs.load();
  } catch (err) {
    console.error("Failed to load NSFW model", err);
  }
  return model;
}

export async function isSafe(file: File): Promise<boolean> {
  const model = await getModel();
  if (!model) {
    // Fail open if model cannot be loaded (e.g. network error, 404)
    return true;
  }

  let url: string | null = null;
  try {
    url = URL.createObjectURL(file);
    const img = document.createElement('img');
    // Set dimensions to match what the model expects or to a reasonable size
    img.width = 400;
    img.height = 400;
    img.src = url;

    await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = (e) => reject(e);
    });

    const predictions = await model.classify(img, 3);
    const pornPrediction = predictions.find(({ className }) => className === 'Porn');
    const hentaiPrediction = predictions.find(({ className }) => className === 'Hentai');

    const pornProb = pornPrediction ? pornPrediction.probability : 0;
    const hentaiProb = hentaiPrediction ? hentaiPrediction.probability : 0;

    // Threshold of 0.25 as used previously
    return !(pornProb > 0.25 || hentaiProb > 0.25);

  } catch (error) {
    console.error('NSFW check failed', error);
    return true; // Fail open on processing error
  } finally {
      if (url) URL.revokeObjectURL(url);
  }
}
