package com.ivancito.videoclub.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.ivancito.videoclub.entity.models.Videoclub;

public interface IVideoclubDao extends CrudRepository<Videoclub, Long> {
	
}
