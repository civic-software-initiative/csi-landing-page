clean:
	rm -rf node_modules dist

build:
	npm ci
	npm run build

deploy: clean build
	aws s3 sync --delete dist s3://csilandingpagestack-websitebucket75c24d94-acm0d1xyv87r
	aws cloudfront create-invalidation --distribution-id E2HPAM435TB2AV --paths "/*"
