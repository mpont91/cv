.PHONY: check update update-force update-ui

update:
	@echo "🛡️  [Local] Checking for SAFE updates (Minor & Patch)..."
	npx npm-check-updates -u --target minor
	npm install
	@echo "✅ [Local] Safe updates completed."

update-force:
	@echo "🔥 [Local] Checking for ALL updates (MAJOR versions included)..."
	npx npm-check-updates -u
	npm install
	@echo "⚠️  [Local] Major updates completed. Check for breaking changes!"

update-ui:
	@echo "🕹️  [Local] Starting interactive update..."
	npx npm-check-updates -i --format group
	npm install
	@echo "✅ [Local] Selected updates completed."

check:
	@echo "🔍 [Local] Auditing code..."
	npm run build
	npm run format:check
	npm run lint
	@echo "✅ [Local] Code is healthy."
