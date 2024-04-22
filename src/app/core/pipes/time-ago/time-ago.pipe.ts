import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow, parseISO } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(dateString: string): string {
    const date = parseISO(dateString);
    const distance = formatDistanceToNow(date);

    if (distance.includes('second')) {
      const minutesAgo = Math.ceil(parseInt(distance.match(/\d+/)![0]) / 60);
      return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
    } else if (distance.includes('minute')) {
      return distance;
    } else if (distance.includes('hour')) {
      const hoursAgo = parseInt(distance.match(/\d+/)![0]);
      return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
    } else if (distance.includes('day')) {
      const daysAgo = parseInt(distance.match(/\d+/)![0]);
      return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
    } else if (distance.includes('week')) {
      const weeksAgo = parseInt(distance.match(/\d+/)![0]);
      return `${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`;
    } else if (distance.includes('month') || distance.includes('year')) {
      const yearsAgo = parseInt(distance.match(/\d+/)![0]);
      return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
    } else {
      return 'Unknown';
    }
  }
}
