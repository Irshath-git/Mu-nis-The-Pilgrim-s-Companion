import { Linkedin, UserRound } from 'lucide-react'
import { teamSection, teamMembers } from '../../data/team'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './team.css'

export function Team() {
  const { t } = useLanguage()

  return (
    <Section id="team" eyebrow={teamSection.eyebrow} title={teamSection.heading}>
      <ul className="grid grid--4 team__grid">
        {teamMembers.map((member, index) => (
          <Reveal as="li" key={member.id} delay={index * 70} className="card team__card">
            <span className="team__photo" role="img" aria-label={t(teamSection.photoPlaceholder)}>
              <UserRound size={34} aria-hidden="true" />
            </span>
            <h3 className="team__name">{t(member.name)}</h3>
            <p className="team__role">{t(member.role)}</p>
            <p className="team__experience">{t(member.experience)}</p>
            <p className="team__contribution">{t(member.contribution)}</p>
            <span className="team__linkedin">
              <Linkedin size={14} aria-hidden="true" />
              {t(teamSection.linkedinPlaceholder)}
            </span>
          </Reveal>
        ))}
      </ul>
      <Reveal className="team__collaboration">
        <p>{t(teamSection.collaboration)}</p>
      </Reveal>
    </Section>
  )
}
