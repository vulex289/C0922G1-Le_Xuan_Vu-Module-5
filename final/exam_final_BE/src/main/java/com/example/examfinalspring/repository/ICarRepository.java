package com.example.examfinalspring.repository;

import com.example.examfinalspring.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarRepository extends JpaRepository<Car,String> {
}
