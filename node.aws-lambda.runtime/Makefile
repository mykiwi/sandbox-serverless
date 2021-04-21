PATH := node_modules/.bin:$(PATH)
SERVERLESS = node_modules/.bin/serverless

# Main rules

deploy: $(SERVERLESS)
	$(SERVERLESS) deploy

info: $(SERVERLESS)
	$(SERVERLESS) info

remove: $(SERVERLESS)
	$(SERVERLESS) remove

# Rules based on files

$(SERVERLESS): node_modules

node_modules: package-lock.json
	npm ci
