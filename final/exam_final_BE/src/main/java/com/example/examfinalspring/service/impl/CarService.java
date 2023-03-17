package com.example.examfinalspring.service.impl;

import com.example.examfinalspring.model.Car;
import com.example.examfinalspring.repository.ICarRepository;
import com.example.examfinalspring.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService implements ICarService {
    @Autowired
    private ICarRepository carRepository;
    @Override
    public List<Car> getAll() {
        return carRepository.findAll();
    }

    @Override
    public void remove(String id) {
    carRepository.deleteById(id);
    }

    @Override
    public void update(Car carEdit) {
    carRepository.save(carEdit);
    }

    @Override
    public Car findById(String id) {
        return carRepository.findById(id).orElse(null);
    }

    @Override
    public Car save(Car carCreate) {
        return carRepository.save(carCreate);
    }
}
