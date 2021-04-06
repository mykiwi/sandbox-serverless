PATH := node_modules/.bin:$(PATH)
SERVERLESS = node_modules/.bin/serverless
BREF = vendor/bin/bref

# Main rules

deploy: $(SERVERLESS)
	$(SERVERLESS) deploy

info: $(SERVERLESS)
	$(SERVERLESS) info

remove: $(SERVERLESS)
	$(SERVERLESS) remove

dashboard: $(SERVERLESS) $(BREF)
	$(BREF) dashboard

# Rules based on files

$(SERVERLESS): node_modules
$(BREF): vendor

node_modules: package-lock.json
	npm ci

vendor: composer.lock
	composer install --prefer-dist --optimize-autoloader
