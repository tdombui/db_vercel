import s3Client from "../../gallery/s3Client";
function shuffleArray(array: string[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
export const fetchImagesFromFolder = async (
  folderPrefix: string
): Promise<string[]> => {
  const params = {
    Bucket: "dombui-photos", // Ensure this is correctly set or use an environment variable
    Prefix: folderPrefix, // Use the function parameter
  };

  try {
    const data = await s3Client.listObjectsV2(params).promise();
    if (!data.Contents || data.Contents.length === 0) {
      return [];
    }

    const bucketUrl = `https://${params.Bucket}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/`; // Assuming you're using dotenv or similar
    const images = data.Contents.map((file) => {
      if (!file.Key) return ""; // Skip if no key
      return `${bucketUrl}${file.Key}`;
    }).filter((url) => url !== ""); // Filter out any empty strings
    // shuffleArray(images);
    return images;
  } catch (error) {
    console.error("Error fetching image from S3", error);
    return [];
  }
};
