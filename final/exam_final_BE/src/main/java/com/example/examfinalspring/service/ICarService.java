package com.example.examfinalspring.service;

import com.example.examfinalspring.model.Car;

import java.util.List;

public interface ICarService {
    List<Car> getAll();
    void remove(String id);
    void update(Car car);
    Car findById(String id);
    Car save(Car car);
}
