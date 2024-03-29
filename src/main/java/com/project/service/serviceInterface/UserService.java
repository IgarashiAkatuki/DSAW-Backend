package com.project.service.serviceInterface;

import com.project.entity.mysql.User;

public interface UserService {

    // 获取用户
    User queryUser(String username);

    // 添加用户
    int addUser(User user);

    // 设置用户可用状态
    // map中的值为: username,flag
    int setUserEnable(String username, Boolean flag);
}
