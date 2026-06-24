import { useState, useEffect } from 'react'
import {
  Phone,
  Time,
  Cursor,
  Wallet,
  Title,
  Typewriter,
  Card,
  Modal,
  Button,
  Input,
  Icon,
  Divider,
  Footer,
  Tooltip,
} from 'animal-island-ui'
import 'animal-island-ui/dist/index.css'
import { resident } from './data/resident'
import type { Project } from './data/resident'
import './App.css'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <div className="app-wrapper">
      <Cursor />
      <Phone>
        <div className="phone-content">
          {/* Status Bar */}
          <div className="status-bar">
            <Time format="HH:mm" />
            <span className="signal">
              <Icon name="wifi" size={14} />
            </span>
          </div>

          {/* Wallet - 岛民身份证 */}
          <section className="section">
            <Wallet
              name={resident.name}
              island={resident.island}
              avatar={resident.avatar}
              title="岛民"
              badge="居民"
            />
          </section>

          {/* Title + Typewriter */}
          <section className="section">
            <Title size="medium" color="brown">
              关于我
            </Title>
            <div className="bio-box">
              {mounted && (
                <Typewriter text={resident.bio} speed={60} />
              )}
            </div>
          </section>

          <Divider />

          {/* Skills */}
          <section className="section">
            <Title size="medium" color="green">
              技能
            </Title>
            <div className="skills-grid">
              {resident.skills.map((skill) => (
                <Tooltip key={skill} content={skill} variant="brown">
                  <span className="skill-tag">{skill}</span>
                </Tooltip>
              ))}
            </div>
          </section>

          <Divider />

          {/* Projects */}
          <section className="section">
            <Title size="medium" color="blue">
              项目
            </Title>
            <div className="projects-grid">
              {resident.projects.map((project, i) => (
                <Card
                  key={project.title}
                  type="default"
                  color={i === 0 ? 'green' : i === 1 ? 'blue' : 'brown'}
                  pattern={i === 0 ? 'dot' : i === 1 ? 'stripe' : 'grid'}
                  onClick={() => openProject(project)}
                >
                  <div className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Divider />

          {/* Contact */}
          <section className="section">
            <Title size="medium" color="orange">
              留言
            </Title>
            <div className="contact-form">
              <Input placeholder="你的名字" size="medium" />
              <Input placeholder="想说的话..." size="medium" />
              <Button type="primary" size="medium" onClick={() => {}}>
                发送信件
              </Button>
            </div>
            <div className="socials">
              {resident.socials.map((s) => (
                <Tooltip key={s.label} content={s.label} variant="brown">
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">
                    <Icon name={s.icon} size={22} />
                  </a>
                </Tooltip>
              ))}
            </div>
          </section>

          <Footer type="default" />
        </div>
      </Phone>

      {/* Project Detail Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="modal-content">
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <p>{selectedProject.desc}</p>
            <Button type="primary" size="small" onClick={() => window.open(selectedProject.link, '_blank')}>
              访问项目
            </Button>
          </div>
        )}
      </Modal>
    </div>
  )
}
