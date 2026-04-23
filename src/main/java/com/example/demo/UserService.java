package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

@Service
public class UserService {
    
    @Autowired
    private UserMapper userMapper;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public void register(User t){
        t.setPassWord(encoder.encode(t.getPassWord())); 
        userMapper.insert(t);
    }

    public String login(User t){
        QueryWrapper<User> queryWrapper = new QueryWrapper<User>().eq("username",t.getUserName());
        User dbUser = userMapper.selectOne(queryWrapper);

        PasswordUtil passwordUtil = new PasswordUtil();
        boolean isMatch = passwordUtil.match(t.getPassWord(), dbUser.getPassWord());
        if(isMatch){
            JwtUtil code = new JwtUtil();
            return code.generateToken(t.getUserName());
        }
        
        return "login failed";
    }  
}
