AWS_S3_FOLDER="https://scigym.s3.eu-central-1.amazonaws.com/"
SCIGYM_API_LOCATION="../scigym-api"  # assumes we have api as a sibling of web in directories
STATIC_LOCATION="$SCIGYM_API_LOCATION/static"

npm run build

# create-react-app builds this index html and uses it's relative path from the build
# so we replace all of these static links with the AWS S3 location
sed -i -e "s,/static/,${AWS_S3_FOLDER},g" build/index.html
cp build/index.html $STATIC_LOCATION

rm -rf "${STATIC_LOCATION}/css/"
cp -r build/static/css/ "${STATIC_LOCATION}/css"

rm -rf "${STATIC_LOCATION}/js/"
cp -r build/static/js/ "${STATIC_LOCATION}/js"
