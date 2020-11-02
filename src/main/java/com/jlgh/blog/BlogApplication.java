package com.jlgh.blog;
import com.jlgh.blog.entities.Blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import static org.springframework.data.mongodb.core.query.Criteria.where;

import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
import com.mongodb.client.MongoClients;
import org.springframework.data.mongodb.core.query.Query;

@SpringBootApplication(exclude = {MongoAutoConfiguration.class, MongoDataAutoConfiguration.class})
public class BlogApplication {

	public static void main(String[] args) {
		MongoOperations mongoOps = new MongoTemplate(new SimpleMongoClientDatabaseFactory(MongoClients.create(), "database"));

		mongoOps.insert(new Blog("Those were tests and this is the most recent blog", "Hello, world!") );
		SpringApplication.run(BlogApplication.class, args);
	}

}
