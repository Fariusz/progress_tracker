package com.rloth.progress_tracker.services;

import com.rloth.progress_tracker.models.ActivitiesList;
import com.rloth.progress_tracker.repos.ListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ListService {

    private final ListRepository listRepository;
    private final LoginService loginService;

    public List<ActivitiesList> getLists() {
        return listRepository.findAll();
    }

    public List<ActivitiesList> getUserLists(String username) {
        return listRepository.findListsByUserId(loginService.getUserId(username));
    }

    public ActivitiesList addList(ActivitiesList list, String username) {
        list.setAuthorId(loginService.getUserId(username));
        return listRepository.save(list);
    }

    @Transactional
    public ActivitiesList editList(ActivitiesList list) {
        ActivitiesList listEdited = listRepository.findById(list.getId()).orElseThrow();
        listEdited.setListName(list.getListName());
        listEdited.setActivities(list.getActivities());
        return listEdited;
    }

    public void deleteList(long id) {
        listRepository.deleteById(id);
    }
}
