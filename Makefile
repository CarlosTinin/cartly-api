# Stop and remove all containers
c_rm:
	@if [ $$(docker ps -q | wc -l) -gt 0 ]; then \
		echo "Stopping and removing containers..."; \
		docker stop $$(docker ps -a -q); \
		docker rm $$(docker ps -a -q); \
	else \
		echo "No containers are running"; \
	fi

# Build development containers
dev_build:
	@docker-compose up -d --build