package com.example.demo;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
                String path = request.getRequestURI();
                if(path.equals("/user/login") || path.equals("/user/register")){
                    filterChain.doFilter(request, response);
                    return;
                }

            String authHeader = request.getHeader("Authorization");
            
            if(authHeader == null || !authHeader.startsWith("Bearer ")){
                response.setStatus(401);
                return;
            }
            
            String token = authHeader.substring(7);

            JwtUtil jwt = new JwtUtil();
            Claims claims = jwt.parseToken(token);
            String username = claims.getSubject();  

            UsernamePasswordAuthenticationToken authentication = 
            new UsernamePasswordAuthenticationToken(username, null,null);

            SecurityContextHolder.getContext().setAuthentication(authentication);

            filterChain.doFilter(request, response);
                 
    }
    
}
