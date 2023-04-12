clean:
	rm -rf node_modules dist

build:
	npm ci
	npm run build

deploy: clean build
	aws s3 sync --delete dist s3://csiinfrastructurestack-websitebucket75c24d94-7hw9od41tilm
	aws cloudfront create-invalidation --distribution-id E1JNGY3CII0WPM --paths "/"
