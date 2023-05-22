import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function AlternateTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator >
        <hr />
          <TimelineConnector />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Workshop 1
          <p>4th February</p>
          4:00pm
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot />
          <TimelineConnector />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Workshop 1
          <p>4th February</p>
          4:00pm
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot />
          <TimelineConnector />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Workshop 1
          <p>4th February</p>
          4:00pm
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot />
          <TimelineConnector />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Workshop 1
          <p>4th February</p>
          4:00pm
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot />
          <TimelineConnector />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Workshop 1
          <p>4th February</p>
          4:00pm
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> Workshop 1
          <p>4th February</p>
          4:00pm
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        Workshop 1
          <p>4th February</p>
          4:00pm
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
        Workshop 1
          <p>4th February</p>
          4:00pm
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
