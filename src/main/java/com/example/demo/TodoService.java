package com.example.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;


@Service
public class TodoService {

    @Autowired
    private TodoMapper todoMapper;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    public List<Todo>getList(String username){
        if(redisTemplate.opsForValue().get("todo:" + username) != null){
            return (List<Todo>) redisTemplate.opsForValue().get("todo:" + username);
        }
        
        QueryWrapper<User>queryWrapper = new QueryWrapper<User>().eq("username",username);
        User user = userMapper.selectOne(queryWrapper);
        QueryWrapper<Todo>todoQuery = new QueryWrapper<Todo>().eq("user_id",user.getId());
        List<Todo> todos = todoMapper.selectList(todoQuery);
        redisTemplate.opsForValue().set("todo:" + username, todos);
        return todos;
    }

    
    public void postList(String username, Todo t){
        QueryWrapper<User> queryWrapper = new QueryWrapper<User>().eq("username",username);
        User user = userMapper.selectOne(queryWrapper);
        t.setUserId(user.getId());
        todoMapper.insert(t);
        redisTemplate.delete("todo:" + username);
    }

    public void putList(String username, Todo t){
        todoMapper.updateById(t);
        redisTemplate.delete("todo:" + username);
    }

    public void deleteList(String username, int id){
        todoMapper.deleteById(id);
        redisTemplate.delete("todo:" + username);
    }
    
}
