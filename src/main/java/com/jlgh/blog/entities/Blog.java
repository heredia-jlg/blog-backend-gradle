package com.jlgh.blog.entities;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Blogs")
public class Blog {

    @Id
    public String id;
    public Date date;
    public String text;
    public String title;

    public Blog( String text, String title) {
        this.date = new Date();
        this.text = text;
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public Date getDate() {
        return this.date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Blog blog = (Blog) o;
        return Objects.equals(date, blog.date) &&
                Objects.equals(text, blog.text) &&
                Objects.equals(title, blog.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(date, text, title);
    }

    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", date=" + date +
                ", text='" + text + '\'' +
                ", title='" + title + '\'' +
                '}';
    }
}
