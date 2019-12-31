exports.lambdaHandler = async (event, context) => {
  const body = JSON.parse(event.body);
  try {
    if (body.ref == "refs/heads/master" && body.commits.length > 0) {
      const repo = body.response.full_name;
      console.log(body.repository.full_name);

      return {
        'statusCode': 200,
        'body': JSON.stringify({
          message: `${repo} commited.`,
          // location: ret.data.trim()
        })
      }
    }
    return {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'hello world',
        // location: ret.data.trim()
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
