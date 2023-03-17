package com.example.examfinalspring.repository;

import com.example.examfinalspring.model.CarType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarTypeRepository extends JpaRepository<CarType,Integer> {
}
