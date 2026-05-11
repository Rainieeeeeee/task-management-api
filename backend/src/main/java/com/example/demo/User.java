package com.example.demo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

@TableName("user")
public class User {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String username;
    private String password;

    public User(Integer id, String username, String password){
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public void setId(Integer id){
        this.id = id;
    }
    
    public Integer getId(){
        return id;
    }

    public void setUserName(String username){
        this.username = username;
    }
    public String getUserName(){
        return username;
    }

    public void setPassWord(String password){
        this.password= password;
    }
    public String getPassWord(){
        return password;
    }

    
}
