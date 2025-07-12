// GitHub API integration utility
// Para usar a API real, você precisará de um token de acesso pessoal do GitHub

const GITHUB_API_BASE = 'https://api.github.com'

// Configuração - substitua pelos seus dados
const GITHUB_CONFIG = {
  username: 'Lamecke', // Substitua pelo seu username do GitHub
  token: null, // Opcional: adicione um token para aumentar o rate limit
  maxRepos: 6, // Número máximo de repositórios para exibir
}

/**
 * Busca repositórios do usuário no GitHub
 * @param {string} username - Username do GitHub
 * @param {Object} options - Opções de configuração
 * @returns {Promise<Array>} Lista de repositórios
 */
export const fetchGitHubRepos = async (username = GITHUB_CONFIG.username, options = {}) => {
  try {
    const {
      maxRepos = GITHUB_CONFIG.maxRepos,
      sort = 'updated',
      type = 'owner',
      token = GITHUB_CONFIG.token
    } = options

    const headers = {
      'Accept': 'application/vnd.github.v3+json',
    }

    // Adiciona token se disponível (aumenta rate limit de 60 para 5000 requests/hora)
    if (token) {
      headers['Authorization'] = `token ${token}`
    }

    const url = `${GITHUB_API_BASE}/users/${username}/repos?sort=${sort}&type=${type}&per_page=${maxRepos}`

    const response = await fetch(url, { headers })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
    }

    const repos = await response.json()

    // Filtra e formata os repositórios
    return repos
      .filter(repo => !repo.fork) // Remove forks por padrão
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'Sem descrição disponível',
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        topics: repo.topics || [],
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        size: repo.size,
        default_branch: repo.default_branch
      }))
  } catch (error) {
    console.error('Erro ao buscar repositórios do GitHub:', error)
    throw error
  }
}

/**
 * Busca informações do perfil do usuário no GitHub
 * @param {string} username - Username do GitHub
 * @param {string} token - Token de acesso (opcional)
 * @returns {Promise<Object>} Informações do perfil
 */
export const fetchGitHubProfile = async (username = GITHUB_CONFIG.username, token = GITHUB_CONFIG.token) => {
  try {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
    }

    if (token) {
      headers['Authorization'] = `token ${token}`
    }

    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`, { headers })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
    }

    const profile = await response.json()

    return {
      login: profile.login,
      name: profile.name,
      bio: profile.bio,
      avatar_url: profile.avatar_url,
      html_url: profile.html_url,
      blog: profile.blog,
      location: profile.location,
      email: profile.email,
      public_repos: profile.public_repos,
      followers: profile.followers,
      following: profile.following,
      created_at: profile.created_at
    }
  } catch (error) {
    console.error('Erro ao buscar perfil do GitHub:', error)
    throw error
  }
}

/**
 * Busca estatísticas de linguagens de um repositório
 * @param {string} username - Username do GitHub
 * @param {string} repo - Nome do repositório
 * @param {string} token - Token de acesso (opcional)
 * @returns {Promise<Object>} Estatísticas de linguagens
 */
export const fetchRepoLanguages = async (username, repo, token = GITHUB_CONFIG.token) => {
  try {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
    }

    if (token) {
      headers['Authorization'] = `token ${token}`
    }

    const response = await fetch(`${GITHUB_API_BASE}/repos/${username}/${repo}/languages`, { headers })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Erro ao buscar linguagens do repositório:', error)
    throw error
  }
}

// Configuração de cores para linguagens de programação
export const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  'C#': '#239120',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  Swift: '#ffac45',
  Kotlin: '#F18E33',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#1572B6',
  Vue: '#4FC08D',
  React: '#61DAFB',
  Angular: '#DD0031',
  'Jupyter Notebook': '#DA5B0B',
  Shell: '#89e051',
  PowerShell: '#012456',
  Dockerfile: '#384d54',
  YAML: '#cb171e',
  JSON: '#292929',
  Markdown: '#083fa1'
}

/**
 * Retorna a cor associada a uma linguagem de programação
 * @param {string} language - Nome da linguagem
 * @returns {string} Código de cor hexadecimal
 */
export const getLanguageColor = (language) => {
  return LANGUAGE_COLORS[language] || '#858585'
}

export default {
  fetchGitHubRepos,
  fetchGitHubProfile,
  fetchRepoLanguages,
  getLanguageColor,
  GITHUB_CONFIG
}

