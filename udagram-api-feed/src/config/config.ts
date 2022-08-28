export const config = {
  'username': 'postgres',
  'password': 'postgres',
  'database': 'postgres',
  'host': 'postgres.ctiesbtdton6.us-east-1.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': 'us-east-1',
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': ' http://localhost:8100 ',
  'jwt': {
    'secret': 'whateverrrr',
  },
};

