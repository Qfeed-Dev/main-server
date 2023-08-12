import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';


@Injectable()
export class AppService {

  ping(): { [key: string]: string } {
    return { 'message' : 'pong' };
  }

  async createPresignedUrl(appName:string, filename: string, filetype: string): Promise<{preSignedUrl: string, imageUrl: string}> {

    const s3 = new S3({
      region: process.env.AWS_S3_BUCKET_REGION,
      accessKeyId: process.env.AWS_S3_ACCESS_KEY,
      secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    })

    const key = `files/${appName}/${Date.now()}-${filename}`
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
      ContentType: filetype,
      Expires: 60 * 60,
    }

    const preSignedUrl = await s3.getSignedUrlPromise('putObject', params)

    return { preSignedUrl: preSignedUrl, imageUrl: `${process.env.AWS_S3_BUCKET_URL}/${key}` }
  }
    
}