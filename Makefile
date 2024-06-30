.PHONY: run_client run_server easy_start

run_client:
	cd client && npm install && npm run dev

run_server:
	cd server && npm install && npm start
