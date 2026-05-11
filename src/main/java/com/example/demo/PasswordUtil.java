package com.example.demo;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordUtil {

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    public String encode(String code){
        

        return encoder.encode(code);
    }
    
    public boolean match(String password, String code){
       

        return encoder.matches(password, code);
    }
}
