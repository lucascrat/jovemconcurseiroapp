const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");

const S3 = new S3Client({
  region: "auto",
  endpoint: `https://b94b59f6ac6870ef08ad4ea5384fc042.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: "372bdcdff20f2696c0e139f91b04803e",
    secretAccessKey: "ea84b1e1ade3f2a2cefae64e143171e47232ecc7fce0c2ebe6e8d23fa4a41348",
  },
});

async function main() {
  try {
    const data = await S3.send(new ListBucketsCommand({}));
    console.log("Buckets:", data.Buckets.map(b => b.Name));
  } catch (error) {
    console.error("Error:", error);
  }
}
main();
