package com.example.examfinalspring.service.impl;

import com.example.examfinalspring.model.Location;
import com.example.examfinalspring.repository.ILocationRepository;
import com.example.examfinalspring.service.ILocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LocationService implements ILocationService {
    @Autowired
    private ILocationRepository locationRepository;
    @Override
    public List<Location> getAll() {
        return locationRepository.findAll();
    }
}
