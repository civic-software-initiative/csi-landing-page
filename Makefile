clean:
	rm -rf node_modules dist

build:
	npm ci
	npm run build

deploy: clean build
	aws s3 sync --delete dist s3://csilandingpagestack-websitebucket75c24d94-wfvt0pvajvuf
	aws cloudfront create-invalidation --distribution-id E3GOGC47X6OYY9 --paths "/*"
