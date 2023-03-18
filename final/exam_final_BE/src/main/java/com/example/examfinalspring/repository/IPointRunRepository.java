package com.example.examfinalspring.repository;

import com.example.examfinalspring.model.PointRun;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILocationRepository extends JpaRepository<PointRun,Integer> {
}
