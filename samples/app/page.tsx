'use client'

import { useState } from 'react'
import styles from './page.module.scss'
import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import Input from '@/components/Input/Input'
import Modal from '@/components/Modal/Modal'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSize, setModalSize] = useState<'small' | 'medium' | 'large'>('medium')

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const openModal = (size: 'small' | 'medium' | 'large') => {
    setModalSize(size)
    setModalOpen(true)
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Review Agent Samples</h1>
      <p className={styles.description}>
        Sample components for code review learning mode.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Button Component</h2>
        
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Variants</h3>
          <div className={styles.row}>
            <Button className={styles.rowItem} variant="primary">Primary</Button>
            <Button className={styles.rowItem} variant="secondary">Secondary</Button>
            <Button className={styles.rowItem} variant="danger">Danger</Button>
          </div>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Sizes</h3>
          <div className={styles.row}>
            <Button className={styles.rowItem} size="small">Small</Button>
            <Button className={styles.rowItem} size="medium">Medium</Button>
            <Button className={styles.rowItem} size="large">Large</Button>
          </div>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>States</h3>
          <div className={styles.row}>
            <Button className={styles.rowItem} disabled>Disabled</Button>
            <Button className={styles.rowItem} loading={loading} onClick={handleLoadingClick}>
              {loading ? 'Loading...' : 'Click for Loading'}
            </Button>
          </div>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Full Width</h3>
          <Button fullWidth>Full Width Button</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Card Component</h2>
        
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Variants</h3>
          <div className={styles.cardGrid}>
            <Card 
              className={styles.cardGridItem}
              variant="default"
              title="Default Card"
              subtitle="This is a default card"
            >
              <p>Card content goes here.</p>
            </Card>
            <Card 
              className={styles.cardGridItem}
              variant="outlined"
              title="Outlined Card"
              subtitle="This is an outlined card"
            >
              <p>Card content goes here.</p>
            </Card>
            <Card 
              className={styles.cardGridItem}
              variant="elevated"
              title="Elevated Card"
              subtitle="This is an elevated card"
            >
              <p>Card content goes here.</p>
            </Card>
          </div>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>With Image</h3>
          <div className={styles.cardGrid}>
            <Card 
              className={styles.cardGridItem}
              image="https://picsum.photos/400/200"
              imageAlt="Sample image"
              title="Card with Image"
              subtitle="Beautiful imagery"
            >
              <p>This card has an image header.</p>
            </Card>
            <Card 
              className={styles.cardGridItem}
              image="https://picsum.photos/400/201"
              imageAlt="Sample image"
              title="Clickable Card"
              subtitle="Click me!"
              onClick={() => alert('Card clicked!')}
            >
              <p>This card is clickable.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Input Component</h2>
        
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Basic</h3>
          <Input className={styles.inputItem} placeholder="Enter text..." />
          <Input className={styles.inputItem} label="With Label" placeholder="Enter your name" />
          <Input 
            className={styles.inputItem}
            label="With Hint" 
            placeholder="Enter email"
            hint="We'll never share your email"
          />
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>States</h3>
          <Input 
            className={styles.inputItem}
            label="Error State" 
            placeholder="Enter username"
            error="Username is already taken"
            defaultValue="john_doe"
          />
          <Input 
            className={styles.inputItem}
            label="Disabled" 
            placeholder="Cannot edit"
            disabled
            defaultValue="Disabled input"
          />
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Types</h3>
          <Input 
            className={styles.inputItem}
            label="Password" 
            type="password"
            placeholder="Enter password"
          />
          <Input 
            className={styles.inputItem}
            label="Number" 
            type="number"
            placeholder="Enter amount"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Modal Component</h2>
        
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Sizes</h3>
          <div className={styles.row}>
            <Button className={styles.rowItem} onClick={() => openModal('small')}>Small Modal</Button>
            <Button className={styles.rowItem} onClick={() => openModal('medium')}>Medium Modal</Button>
            <Button className={styles.rowItem} onClick={() => openModal('large')}>Large Modal</Button>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`${modalSize.charAt(0).toUpperCase() + modalSize.slice(1)} Modal`}
        size={modalSize}
      >
        <p className={styles.modalText}>This is a {modalSize} modal dialog.</p>
        <p className={styles.modalText}>Press Escape or click outside to close.</p>
        <div className={styles.modalActions}>
          <Button className={styles.modalButton} variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
          <Button className={styles.modalButton} variant="primary" onClick={() => setModalOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </main>
  )
}
