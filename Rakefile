namespace :sam do
  file 'package.yaml' do
    sh 'sam package --template-file template.yaml --s3-bucket masarakki-sam-deploy --output-template-file packaged.yaml'
  end

  task package: 'package.yaml'
  task deploy: :package do
    sh 'sam deploy --template-file packaged.yaml --stack-name joya --capabilities CAPABILITY_IAM'
  end
end
