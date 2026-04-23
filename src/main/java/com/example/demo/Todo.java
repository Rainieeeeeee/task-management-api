package com.example.demo;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

@TableName("todo_list")

public class Todo{
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String title;
    private Boolean completed;
    private Integer userId;

    public Todo() {}

    public  Todo(Integer id, String title, Boolean completed, Integer userId){
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.userId = userId;
        
    }
 
    public void setId(Integer id){
        this.id = id;
    }
    
    public Integer getId(){
        return id;
    }

    public void setTitle(String title){
        this.title = title;
    }
    public String getTitle(){
        return title;
    }

    public void setCompleted(Boolean completed){
        this.completed = completed;
    }
    public Boolean getCompleted(){
        return completed;
    }

    public void setUserId(Integer userId){
        this.userId = userId;
    }
    public Integer getUserId(){
        return userId;
    }
}