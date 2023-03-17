package com.example.examfinalspring.repository;

import com.example.examfinalspring.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILocationRepository extends JpaRepository<Location,Integer> {
}
