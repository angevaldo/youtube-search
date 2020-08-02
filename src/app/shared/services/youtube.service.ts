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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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

  apiKey: string = 'AIzaSyBDtrRlF-ZzJHoHzH3zdxILGurLe4G97CI';
  maxResults: number = 2;

  constructor(public http: HttpClient) { }

  getVideosByTerm(term): Observable<Object> {
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
