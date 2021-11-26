package com.rloth.progress_tracker.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rloth.progress_tracker.models.Activity;
import com.rloth.progress_tracker.repos.ActivityRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@WithMockUser
class ActivityControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private ActivityRepository activityRepository;

    @Test
    @Transactional
    void shouldGetSingleActivity() throws Exception {
        // given
        Activity newActivity = new Activity();
        newActivity.setActivityName("Test");
        newActivity.setCreated(LocalDateTime.now());
        activityRepository.save(newActivity);

        // when
        MvcResult mvcResult = mockMvc.perform(get("/activities/" + newActivity.getId()))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().is(200))
                .andReturn();

        // then
        Activity activity = objectMapper.readValue(mvcResult.getResponse().getContentAsString(), Activity.class);
        assertThat(activity).isNotNull();
        assertThat(activity.getId()).isEqualTo(newActivity.getId());
        assertThat(activity.getActivityName()).isEqualTo("Test");
    }
}