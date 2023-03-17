package com.example.examfinalspring.controller;

import com.example.examfinalspring.dto.CarDto;
import com.example.examfinalspring.model.Car;
import com.example.examfinalspring.model.CarType;
import com.example.examfinalspring.model.Location;
import com.example.examfinalspring.service.ICarService;
import com.example.examfinalspring.service.ICarTypeService;
import com.example.examfinalspring.service.ILocationService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class CarController {
    @Autowired
    private ICarService carService;
    @Autowired
    private ICarTypeService carTypeService;
    @Autowired
    private ILocationService locationService;

    @GetMapping("/cars")
    public ResponseEntity<List<Car>> getAllCar() {
        List<Car> carList = carService.getAll();
        if (carList == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<List<Car>>(carList, HttpStatus.OK);
        }
    }

    @GetMapping("/carTypes")
    public ResponseEntity<List<CarType>> getAllCarType() {
        List<CarType> carTypeList = carTypeService.findAll();
        if (carTypeList == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<List<CarType>>(carTypeList, HttpStatus.OK);
        }
    }

    @PostMapping(value = "/cars/save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveCar(@RequestBody CarDto carCreate) {
        if (carCreate == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Car car = new Car();
        BeanUtils.copyProperties(carCreate, car);
        carService.save(car);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/locations")
    public ResponseEntity<List<Location>> getLocationsAll() {
        List<Location> locationList = locationService.getAll();
        if (locationList == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<List<Location>>(locationList, HttpStatus.OK);
        }
    }

    @GetMapping("/cars/detail/{id}")
    public ResponseEntity<Car> findCarById(@PathVariable String id) {
        Car car = carService.findById(id);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @DeleteMapping("/cars/delete/{id}")
    public ResponseEntity<Car> deleteCarById(@PathVariable String id) {
        carService.remove(id);
        Car carDelete = carService.findById(id);
        return new ResponseEntity<Car>(carDelete, HttpStatus.OK);
    }

    @PatchMapping("/cars/edit/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable String id, @RequestBody CarDto carEdit) {
        Car car = carService.findById(id);
        if (carEdit == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        BeanUtils.copyProperties(carEdit, car);
        carService.update(car);
        return new ResponseEntity<Car>(car, HttpStatus.OK);
    }

}
