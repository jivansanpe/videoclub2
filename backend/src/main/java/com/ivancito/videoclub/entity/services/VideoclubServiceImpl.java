package com.ivancito.videoclub.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ivancito.videoclub.entity.dao.IVideoclubDao;
import com.ivancito.videoclub.entity.models.Videoclub;

@Service
public class VideoclubServiceImpl implements IVideoclubService {

	@Autowired
	private IVideoclubDao videoclubDao;
	
	@Override
	public Videoclub get(long id) {
		return videoclubDao.findById(id).get();
	}

	@Override
	public List<Videoclub> getAll() {
		return (List<Videoclub>) videoclubDao.findAll();
	}

	@Override
	public void post(Videoclub película) {
		videoclubDao.save(película);
	}

	@Override
	public void put(Videoclub película, long id) {
		videoclubDao.findById(id).ifPresent((x)->{
			película.setId(id);
			videoclubDao.save(película);
		});
		
	}

	@Override
	public void delete(long id) {
		videoclubDao.deleteById(id);
	}
	
}
