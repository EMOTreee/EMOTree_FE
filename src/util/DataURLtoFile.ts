export default async function blobURLtoFile(blobUrl: string, fileName: string) {
  const res = await fetch(blobUrl);
  const blob = await res.blob();
  return new File([blob], fileName, { type: blob.type });
}
