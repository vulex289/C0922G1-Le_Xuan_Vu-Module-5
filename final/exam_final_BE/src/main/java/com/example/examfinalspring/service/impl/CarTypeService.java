package com.example.examfinalspring.service.impl;

import com.example.examfinalspring.model.CarType;
import com.example.examfinalspring.repository.ICarTypeRepository;
import com.example.examfinalspring.service.ICarTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarTypeService implements ICarTypeService {
    @Autowired
    private ICarTypeRepository carTypeRepository;
    @Override
    public List<CarType> findAll() {
        return carTypeRepository.findAll();
    }
}
