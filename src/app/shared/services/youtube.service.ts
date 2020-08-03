import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Video } from '../models';

const videosMock: any[] = [{
  id: { videoId: 'YyEDqb-BcpE' },
  duration: 20,
  snippet: {
    title: 'PJ Masks em Português 🔴 AO VIVO | Desenhos Animados',
    description: 'Prepare-se para viver pequenas histórias com estes grandes heróis do Disney Junior. Menino Gato, Corujita e Lagartixo irão resolver os problemas da cidade para permitir que todos os moradores tenham um sono tranquilo. Com as suas roupas coloridas , eles viajarão em veículos incríveis e não descansarão até deixar tudo perfeito.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/YyEDqb-BcpE/hqdefault_live.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGizW7n9ZJ2egtUrz6dW4kOQHHRQ'
      }
    }
  }
}, {
  id: { videoId: '1xNpswzR1xs' },
  duration: 30,
  snippet: {
    title: 'PJ Masks em Português 🥚 Ovos surpresa 🥚 Compilação de episódios | HD | Desenhos Animados',
    description: 'PJ Masks em Português 🥚 Ovos surpresa 🥚 Compilação de episódios | HD | Desenhos Animados Clique no botão INSCREVER-SE para saber quando os novos vídeos são postados!: ',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/YyEDqb-BcpE/hqdefault_live.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGizW7n9ZJ2egtUrz6dW4kOQHHRQ'
      }
    }
  }
}, {
  id: { videoId: 'YyEDqb-BcpE' },
  duration: 60,
  snippet: {
    title: 'PJ Masks em Português 🔴 AO VIVO | Desenhos Animados',
    description: 'Prepare-se para viver pequenas histórias com estes grandes heróis do Disney Junior. Menino Gato, Corujita e Lagartixo irão resolver os problemas da cidade para permitir que todos os moradores tenham um sono tranquilo. Com as suas roupas coloridas , eles viajarão em veículos incríveis e não descansarão até deixar tudo perfeito.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/YyEDqb-BcpE/hqdefault_live.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGizW7n9ZJ2egtUrz6dW4kOQHHRQ'
      }
    }
  }
}, {
  id: { videoId: '1xNpswzR1xs' },
  duration: 90,
  snippet: {
    title: 'PJ Masks em Português 🥚 Ovos surpresa 🥚 Compilação de episódios | HD | Desenhos Animados',
    description: 'PJ Masks em Português 🥚 Ovos surpresa 🥚 Compilação de episódios | HD | Desenhos Animados Clique no botão INSCREVER-SE para saber quando os novos vídeos são postados!: ',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/YyEDqb-BcpE/hqdefault_live.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGizW7n9ZJ2egtUrz6dW4kOQHHRQ'
      }
    }
  }
}, {
  id: { videoId: 'YyEDqb-BcpE' },
  duration: 200,
  snippet: {
    title: 'PJ Masks em Português 🔴 AO VIVO | Desenhos Animados',
    description: 'Prepare-se para viver pequenas histórias com estes grandes heróis do Disney Junior. Menino Gato, Corujita e Lagartixo irão resolver os problemas da cidade para permitir que todos os moradores tenham um sono tranquilo. Com as suas roupas coloridas , eles viajarão em veículos incríveis e não descansarão até deixar tudo perfeito.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/YyEDqb-BcpE/hqdefault_live.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGizW7n9ZJ2egtUrz6dW4kOQHHRQ'
      }
    }
  }
}, {
  id: { videoId: 'YyEDqb-BcpE' },
  duration: 30,
  snippet: {
    title: 'PJ Masks em Português 🔴 AO VIVO | Desenhos Animados',
    description: 'Prepare-se para viver pequenas histórias com estes grandes heróis do Disney Junior. Menino Gato, Corujita e Lagartixo irão resolver os problemas da cidade para permitir que todos os moradores tenham um sono tranquilo. Com as suas roupas coloridas , eles viajarão em veículos incríveis e não descansarão até deixar tudo perfeito.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/YyEDqb-BcpE/hqdefault_live.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGizW7n9ZJ2egtUrz6dW4kOQHHRQ'
      }
    }
  }
}, {
  id: { videoId: 'YyEDqb-BcpE' },
  duration: 40,
  snippet: {
    title: 'PJ Masks em Português 🔴 AO VIVO | Desenhos Animados',
    description: 'Prepare-se para viver pequenas histórias com estes grandes heróis do Disney Junior. Menino Gato, Corujita e Lagartixo irão resolver os problemas da cidade para permitir que todos os moradores tenham um sono tranquilo. Com as suas roupas coloridas , eles viajarão em veículos incríveis e não descansarão até deixar tudo perfeito.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/YyEDqb-BcpE/hqdefault_live.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGizW7n9ZJ2egtUrz6dW4kOQHHRQ'
      }
    }
  }
}, {
  id: { videoId: 'YyEDqb-BcpE' },
  duration: 20,
  snippet: {
    title: 'PJ Masks em Português 🔴 AO VIVO | Desenhos Animados',
    description: 'Prepare-se para viver pequenas histórias com estes grandes heróis do Disney Junior. Menino Gato, Corujita e Lagartixo irão resolver os problemas da cidade para permitir que todos os moradores tenham um sono tranquilo. Com as suas roupas coloridas , eles viajarão em veículos incríveis e não descansarão até deixar tudo perfeito.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/YyEDqb-BcpE/hqdefault_live.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGizW7n9ZJ2egtUrz6dW4kOQHHRQ'
      }
    }
  }
}, {
  id: { videoId: 'YyEDqb-BcpE' },
  duration: 60,
  snippet: {
    title: 'PJ Masks em Português 🔴 AO VIVO | Desenhos Animados',
    description: 'Prepare-se para viver pequenas histórias com estes grandes heróis do Disney Junior. Menino Gato, Corujita e Lagartixo irão resolver os problemas da cidade para permitir que todos os moradores tenham um sono tranquilo. Com as suas roupas coloridas , eles viajarão em veículos incríveis e não descansarão até deixar tudo perfeito.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/YyEDqb-BcpE/hqdefault_live.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGizW7n9ZJ2egtUrz6dW4kOQHHRQ'
      }
    }
  }
}, {
  id: { videoId: 'YyEDqb-BcpE' },
  duration: 15,
  snippet: {
    title: 'PJ Masks em Português 🔴 AO VIVO | Desenhos Animados',
    description: 'Prepare-se para viver pequenas histórias com estes grandes heróis do Disney Junior. Menino Gato, Corujita e Lagartixo irão resolver os problemas da cidade para permitir que todos os moradores tenham um sono tranquilo. Com as suas roupas coloridas , eles viajarão em veículos incríveis e não descansarão até deixar tudo perfeito.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/YyEDqb-BcpE/hqdefault_live.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGizW7n9ZJ2egtUrz6dW4kOQHHRQ'
      }
    }
  }
}]

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey: string = 'AIzaSyAaXyDyLseMQ9DxjUF98XomGJg-oYLmb58';
  maxResults: number = 200;

  constructor(public http: HttpClient) { }

  static getDurationsInMinutes(duration: string): number {
    var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    var hours: number = 0, minutes = 0, seconds = 0, totalMinutes;

    if (reptms.test(duration)) {
      var matches = reptms.exec(duration);
      if (matches[1]) hours = Number(matches[1]);
      if (matches[2]) minutes = Number(matches[2]);
      if (matches[3]) seconds = Number(matches[3]);
      totalMinutes = hours * 60 + minutes + seconds / 60;
    }

    return totalMinutes;
  }

  getVideosDurations(videos: Video[]): Observable<Object> {
    var ids: string[] = [];
    videos.forEach(element => {
      ids.push(element.id);
    });

    let url = 'https://www.googleapis.com/youtube/v3/videos'
      + '?key=' + this.apiKey
      + '&part=contentDetails'
      + '&id=' + ids;

    return this.http.get(url).pipe(map((res) => { return res; }));
  }

  getVideosByTerm(term: string): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search'
      + '?key=' + this.apiKey
      + '&q=' + term
      + '&part=snippet'
      + '&type=video,id'
      + '&maxResults=' + this.maxResults;

    return this.http.get(url).pipe(map((res) => { return res; }));
  }

  getVideosByTermMock(term): any[] {
    return videosMock;
  }

}
