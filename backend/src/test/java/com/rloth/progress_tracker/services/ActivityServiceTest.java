package com.rloth.progress_tracker.services;

import com.rloth.progress_tracker.models.Activity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class ActivityServiceTest {

    @Autowired
    private ActivityService activityService;

/*    @Test
    void shouldGetSingleActivity() {
        // given
        // when
        Activity singleActivity = activityService.getActivity(1);
        // then
        assertThat(singleActivity).isNotNull();
        assertThat(singleActivity.getId()).isEqualTo(1);
    }*/
}