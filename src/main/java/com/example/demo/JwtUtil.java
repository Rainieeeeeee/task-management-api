package com.example.demo;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

public class JwtUtil {

    private String secretKey = "2718281828459045235360287471352662497";
  
    public String generateToken(String username){
        SecretKey key = Keys.hmacShaKeyFor(secretKey.getBytes());
        
        return Jwts.builder().setSubject(username).signWith(key).compact();
    }
    
    public Claims parseToken(String token){
        SecretKey key = Keys.hmacShaKeyFor((secretKey.getBytes()));
        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
    }
}
