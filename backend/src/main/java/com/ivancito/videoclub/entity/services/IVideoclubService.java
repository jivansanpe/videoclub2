package com.ivancito.videoclub.entity.services;

import java.util.List;

import com.ivancito.videoclub.entity.models.Videoclub;

public interface IVideoclubService {
	public Videoclub get(long id);
	public List<Videoclub> getAll();
	public void post(Videoclub película);
	public void put(Videoclub película, long id);
	public void delete(long id);
}
