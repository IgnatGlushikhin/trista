var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.JointSpring' )
  var i1795 = data
  i1794.spring = i1795[0]
  i1794.damper = i1795[1]
  i1794.targetPosition = i1795[2]
  return i1794
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.JointMotor' )
  var i1797 = data
  i1796.m_TargetVelocity = i1797[0]
  i1796.m_Force = i1797[1]
  i1796.m_FreeSpin = i1797[2]
  return i1796
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.JointLimits' )
  var i1799 = data
  i1798.m_Min = i1799[0]
  i1798.m_Max = i1799[1]
  i1798.m_Bounciness = i1799[2]
  i1798.m_BounceMinVelocity = i1799[3]
  i1798.m_ContactDistance = i1799[4]
  i1798.minBounce = i1799[5]
  i1798.maxBounce = i1799[6]
  return i1798
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.JointDrive' )
  var i1801 = data
  i1800.m_PositionSpring = i1801[0]
  i1800.m_PositionDamper = i1801[1]
  i1800.m_MaximumForce = i1801[2]
  return i1800
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1803 = data
  i1802.m_Spring = i1803[0]
  i1802.m_Damper = i1803[1]
  return i1802
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1805 = data
  i1804.m_Limit = i1805[0]
  i1804.m_Bounciness = i1805[1]
  i1804.m_ContactDistance = i1805[2]
  return i1804
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1807 = data
  i1806.m_ExtremumSlip = i1807[0]
  i1806.m_ExtremumValue = i1807[1]
  i1806.m_AsymptoteSlip = i1807[2]
  i1806.m_AsymptoteValue = i1807[3]
  i1806.m_Stiffness = i1807[4]
  return i1806
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1809 = data
  i1808.m_LowerAngle = i1809[0]
  i1808.m_UpperAngle = i1809[1]
  return i1808
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1811 = data
  i1810.m_MotorSpeed = i1811[0]
  i1810.m_MaximumMotorTorque = i1811[1]
  return i1810
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1813 = data
  i1812.m_DampingRatio = i1813[0]
  i1812.m_Frequency = i1813[1]
  i1812.m_Angle = i1813[2]
  return i1812
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1815 = data
  i1814.m_LowerTranslation = i1815[0]
  i1814.m_UpperTranslation = i1815[1]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1816 = root || new pc.UnityMaterial()
  var i1817 = data
  i1816.name = i1817[0]
  request.r(i1817[1], i1817[2], 0, i1816, 'shader')
  i1816.renderQueue = i1817[3]
  i1816.enableInstancing = !!i1817[4]
  var i1819 = i1817[5]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1819[i + 0]) );
  }
  i1816.floatParameters = i1818
  var i1821 = i1817[6]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1821[i + 0]) );
  }
  i1816.colorParameters = i1820
  var i1823 = i1817[7]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1823[i + 0]) );
  }
  i1816.vectorParameters = i1822
  var i1825 = i1817[8]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1825[i + 0]) );
  }
  i1816.textureParameters = i1824
  var i1827 = i1817[9]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1827[i + 0]) );
  }
  i1816.materialFlags = i1826
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1831 = data
  i1830.name = i1831[0]
  i1830.value = i1831[1]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.value = new pc.Color(i1835[1], i1835[2], i1835[3], i1835[4])
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1839 = data
  i1838.name = i1839[0]
  i1838.value = new pc.Vec4( i1839[1], i1839[2], i1839[3], i1839[4] )
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1843 = data
  i1842.name = i1843[0]
  request.r(i1843[1], i1843[2], 0, i1842, 'value')
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1847 = data
  i1846.name = i1847[0]
  i1846.enabled = !!i1847[1]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1849 = data
  i1848.position = new pc.Vec3( i1849[0], i1849[1], i1849[2] )
  i1848.scale = new pc.Vec3( i1849[3], i1849[4], i1849[5] )
  i1848.rotation = new pc.Quat(i1849[6], i1849[7], i1849[8], i1849[9])
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1851 = data
  i1850.enabled = !!i1851[0]
  i1850.isTrigger = !!i1851[1]
  request.r(i1851[2], i1851[3], 0, i1850, 'material')
  i1850.center = new pc.Vec3( i1851[4], i1851[5], i1851[6] )
  i1850.radius = i1851[7]
  return i1850
}

Deserializers["UnselectedColliderDrawer"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnselectedColliderDrawer' )
  var i1853 = data
  return i1852
}

Deserializers["WheatPieceDestroyer"] = function (request, data, root) {
  var i1854 = root || request.c( 'WheatPieceDestroyer' )
  var i1855 = data
  return i1854
}

Deserializers["WheatPieceRandomizer"] = function (request, data, root) {
  var i1856 = root || request.c( 'WheatPieceRandomizer' )
  var i1857 = data
  request.r(i1857[0], i1857[1], 0, i1856, 'partsParent')
  return i1856
}

Deserializers["DisableIfTooFar"] = function (request, data, root) {
  var i1858 = root || request.c( 'DisableIfTooFar' )
  var i1859 = data
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1861 = data
  request.r(i1861[0], i1861[1], 0, i1860, 'sharedMesh')
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, 'additionalVertexStreams')
  i1862.enabled = !!i1863[2]
  request.r(i1863[3], i1863[4], 0, i1862, 'sharedMaterial')
  var i1865 = i1863[5]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 2) {
  request.r(i1865[i + 0], i1865[i + 1], 2, i1864, '')
  }
  i1862.sharedMaterials = i1864
  i1862.receiveShadows = !!i1863[6]
  i1862.shadowCastingMode = i1863[7]
  i1862.sortingLayerID = i1863[8]
  i1862.sortingOrder = i1863[9]
  i1862.lightmapIndex = i1863[10]
  i1862.lightmapSceneIndex = i1863[11]
  i1862.lightmapScaleOffset = new pc.Vec4( i1863[12], i1863[13], i1863[14], i1863[15] )
  i1862.lightProbeUsage = i1863[16]
  i1862.reflectionProbeUsage = i1863[17]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1869 = data
  i1868.name = i1869[0]
  i1868.tag = i1869[1]
  i1868.enabled = !!i1869[2]
  i1868.isStatic = !!i1869[3]
  i1868.layer = i1869[4]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1871 = data
  i1870.name = i1871[0]
  i1870.halfPrecision = !!i1871[1]
  i1870.vertexCount = i1871[2]
  i1870.aabb = i1871[3]
  var i1873 = i1871[4]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( !!i1873[i + 0] );
  }
  i1870.streams = i1872
  i1870.vertices = i1871[5]
  var i1875 = i1871[6]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1875[i + 0]) );
  }
  i1870.subMeshes = i1874
  var i1877 = i1871[7]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 16) {
    i1876.push( new pc.Mat4().setData(i1877[i + 0], i1877[i + 1], i1877[i + 2], i1877[i + 3],  i1877[i + 4], i1877[i + 5], i1877[i + 6], i1877[i + 7],  i1877[i + 8], i1877[i + 9], i1877[i + 10], i1877[i + 11],  i1877[i + 12], i1877[i + 13], i1877[i + 14], i1877[i + 15]) );
  }
  i1870.bindposes = i1876
  var i1879 = i1871[8]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1879[i + 0]) );
  }
  i1870.blendShapes = i1878
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1885 = data
  i1884.triangles = i1885[0]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1891 = data
  i1890.name = i1891[0]
  var i1893 = i1891[1]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1893[i + 0]) );
  }
  i1890.frames = i1892
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1895 = data
  i1894.name = i1895[0]
  i1894.width = i1895[1]
  i1894.height = i1895[2]
  i1894.mipmapCount = i1895[3]
  i1894.anisoLevel = i1895[4]
  i1894.filterMode = i1895[5]
  i1894.hdr = !!i1895[6]
  i1894.format = i1895[7]
  i1894.wrapMode = i1895[8]
  i1894.alphaIsTransparency = !!i1895[9]
  i1894.alphaSource = i1895[10]
  return i1894
}

Deserializers["DamagingObstacle"] = function (request, data, root) {
  var i1896 = root || request.c( 'DamagingObstacle' )
  var i1897 = data
  request.r(i1897[0], i1897[1], 0, i1896, 'parts')
  i1896.m_damage = i1897[2]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1899 = data
  i1898.enabled = !!i1899[0]
  request.r(i1899[1], i1899[2], 0, i1898, 'sharedMaterial')
  var i1901 = i1899[3]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 2) {
  request.r(i1901[i + 0], i1901[i + 1], 2, i1900, '')
  }
  i1898.sharedMaterials = i1900
  i1898.receiveShadows = !!i1899[4]
  i1898.shadowCastingMode = i1899[5]
  i1898.sortingLayerID = i1899[6]
  i1898.sortingOrder = i1899[7]
  i1898.lightmapIndex = i1899[8]
  i1898.lightmapSceneIndex = i1899[9]
  i1898.lightmapScaleOffset = new pc.Vec4( i1899[10], i1899[11], i1899[12], i1899[13] )
  i1898.lightProbeUsage = i1899[14]
  i1898.reflectionProbeUsage = i1899[15]
  request.r(i1899[16], i1899[17], 0, i1898, 'mesh')
  i1898.meshCount = i1899[18]
  i1898.activeVertexStreamsCount = i1899[19]
  i1898.alignment = i1899[20]
  i1898.renderMode = i1899[21]
  i1898.sortMode = i1899[22]
  i1898.lengthScale = i1899[23]
  i1898.velocityScale = i1899[24]
  i1898.cameraVelocityScale = i1899[25]
  i1898.normalDirection = i1899[26]
  i1898.sortingFudge = i1899[27]
  i1898.minParticleSize = i1899[28]
  i1898.maxParticleSize = i1899[29]
  i1898.pivot = new pc.Vec3( i1899[30], i1899[31], i1899[32] )
  request.r(i1899[33], i1899[34], 0, i1898, 'trailMaterial')
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1903 = data
  i1902.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1903[0], i1902.main)
  i1902.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1903[1], i1902.colorBySpeed)
  i1902.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1903[2], i1902.colorOverLifetime)
  i1902.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1903[3], i1902.emission)
  i1902.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1903[4], i1902.rotationBySpeed)
  i1902.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1903[5], i1902.rotationOverLifetime)
  i1902.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1903[6], i1902.shape)
  i1902.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1903[7], i1902.sizeBySpeed)
  i1902.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1903[8], i1902.sizeOverLifetime)
  i1902.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1903[9], i1902.textureSheetAnimation)
  i1902.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1903[10], i1902.velocityOverLifetime)
  i1902.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1903[11], i1902.noise)
  i1902.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1903[12], i1902.inheritVelocity)
  i1902.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1903[13], i1902.forceOverLifetime)
  i1902.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1903[14], i1902.limitVelocityOverLifetime)
  i1902.useAutoRandomSeed = !!i1903[15]
  i1902.randomSeed = i1903[16]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1904 = root || new pc.ParticleSystemMain()
  var i1905 = data
  i1904.duration = i1905[0]
  i1904.loop = !!i1905[1]
  i1904.prewarm = !!i1905[2]
  i1904.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[3], i1904.startDelay)
  i1904.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[4], i1904.startLifetime)
  i1904.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[5], i1904.startSpeed)
  i1904.startSize3D = !!i1905[6]
  i1904.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[7], i1904.startSizeX)
  i1904.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[8], i1904.startSizeY)
  i1904.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[9], i1904.startSizeZ)
  i1904.startRotation3D = !!i1905[10]
  i1904.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[11], i1904.startRotationX)
  i1904.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[12], i1904.startRotationY)
  i1904.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[13], i1904.startRotationZ)
  i1904.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1905[14], i1904.startColor)
  i1904.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[15], i1904.gravityModifier)
  i1904.simulationSpace = i1905[16]
  request.r(i1905[17], i1905[18], 0, i1904, 'customSimulationSpace')
  i1904.simulationSpeed = i1905[19]
  i1904.useUnscaledTime = !!i1905[20]
  i1904.scalingMode = i1905[21]
  i1904.playOnAwake = !!i1905[22]
  i1904.maxParticles = i1905[23]
  i1904.emitterVelocityMode = i1905[24]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1906 = root || new pc.MinMaxCurve()
  var i1907 = data
  i1906.mode = i1907[0]
  i1906.curveMin = new pc.AnimationCurve( { keys_flow: i1907[1] } )
  i1906.curveMax = new pc.AnimationCurve( { keys_flow: i1907[2] } )
  i1906.curveMultiplier = i1907[3]
  i1906.constantMin = i1907[4]
  i1906.constantMax = i1907[5]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1908 = root || new pc.MinMaxGradient()
  var i1909 = data
  i1908.mode = i1909[0]
  i1908.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1909[1], i1908.gradientMin)
  i1908.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1909[2], i1908.gradientMax)
  i1908.colorMin = new pc.Color(i1909[3], i1909[4], i1909[5], i1909[6])
  i1908.colorMax = new pc.Color(i1909[7], i1909[8], i1909[9], i1909[10])
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1911 = data
  i1910.mode = i1911[0]
  var i1913 = i1911[1]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1913[i + 0]) );
  }
  i1910.colorKeys = i1912
  var i1915 = i1911[2]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1915[i + 0]) );
  }
  i1910.alphaKeys = i1914
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1916 = root || new pc.ParticleSystemColorBySpeed()
  var i1917 = data
  i1916.enabled = !!i1917[0]
  i1916.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1917[1], i1916.color)
  i1916.range = new pc.Vec2( i1917[2], i1917[3] )
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1921 = data
  i1920.color = new pc.Color(i1921[0], i1921[1], i1921[2], i1921[3])
  i1920.time = i1921[4]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1925 = data
  i1924.alpha = i1925[0]
  i1924.time = i1925[1]
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1926 = root || new pc.ParticleSystemColorOverLifetime()
  var i1927 = data
  i1926.enabled = !!i1927[0]
  i1926.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1927[1], i1926.color)
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1928 = root || new pc.ParticleSystemEmitter()
  var i1929 = data
  i1928.enabled = !!i1929[0]
  i1928.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1929[1], i1928.rateOverTime)
  i1928.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1929[2], i1928.rateOverDistance)
  var i1931 = i1929[3]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1931[i + 0]) );
  }
  i1928.bursts = i1930
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1934 = root || new pc.ParticleSystemBurst()
  var i1935 = data
  i1934.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[0], i1934.count)
  i1934.cycleCount = i1935[1]
  i1934.minCount = i1935[2]
  i1934.maxCount = i1935[3]
  i1934.repeatInterval = i1935[4]
  i1934.time = i1935[5]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1936 = root || new pc.ParticleSystemRotationBySpeed()
  var i1937 = data
  i1936.enabled = !!i1937[0]
  i1936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[1], i1936.x)
  i1936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[2], i1936.y)
  i1936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[3], i1936.z)
  i1936.separateAxes = !!i1937[4]
  i1936.range = new pc.Vec2( i1937[5], i1937[6] )
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1938 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1939 = data
  i1938.enabled = !!i1939[0]
  i1938.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[1], i1938.x)
  i1938.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[2], i1938.y)
  i1938.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[3], i1938.z)
  i1938.separateAxes = !!i1939[4]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1940 = root || new pc.ParticleSystemShape()
  var i1941 = data
  i1940.enabled = !!i1941[0]
  i1940.shapeType = i1941[1]
  i1940.randomDirectionAmount = i1941[2]
  i1940.sphericalDirectionAmount = i1941[3]
  i1940.randomPositionAmount = i1941[4]
  i1940.alignToDirection = !!i1941[5]
  i1940.radius = i1941[6]
  i1940.radiusMode = i1941[7]
  i1940.radiusSpread = i1941[8]
  i1940.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[9], i1940.radiusSpeed)
  i1940.radiusThickness = i1941[10]
  i1940.angle = i1941[11]
  i1940.length = i1941[12]
  i1940.boxThickness = new pc.Vec3( i1941[13], i1941[14], i1941[15] )
  i1940.meshShapeType = i1941[16]
  request.r(i1941[17], i1941[18], 0, i1940, 'mesh')
  request.r(i1941[19], i1941[20], 0, i1940, 'meshRenderer')
  request.r(i1941[21], i1941[22], 0, i1940, 'skinnedMeshRenderer')
  i1940.useMeshMaterialIndex = !!i1941[23]
  i1940.meshMaterialIndex = i1941[24]
  i1940.useMeshColors = !!i1941[25]
  i1940.normalOffset = i1941[26]
  i1940.arc = i1941[27]
  i1940.arcMode = i1941[28]
  i1940.arcSpread = i1941[29]
  i1940.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[30], i1940.arcSpeed)
  i1940.donutRadius = i1941[31]
  i1940.position = new pc.Vec3( i1941[32], i1941[33], i1941[34] )
  i1940.rotation = new pc.Vec3( i1941[35], i1941[36], i1941[37] )
  i1940.scale = new pc.Vec3( i1941[38], i1941[39], i1941[40] )
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1942 = root || new pc.ParticleSystemSizeBySpeed()
  var i1943 = data
  i1942.enabled = !!i1943[0]
  i1942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[1], i1942.x)
  i1942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[2], i1942.y)
  i1942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[3], i1942.z)
  i1942.separateAxes = !!i1943[4]
  i1942.range = new pc.Vec2( i1943[5], i1943[6] )
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1944 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1945 = data
  i1944.enabled = !!i1945[0]
  i1944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[1], i1944.x)
  i1944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[2], i1944.y)
  i1944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[3], i1944.z)
  i1944.separateAxes = !!i1945[4]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1946 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1947 = data
  i1946.enabled = !!i1947[0]
  i1946.mode = i1947[1]
  i1946.animation = i1947[2]
  i1946.numTilesX = i1947[3]
  i1946.numTilesY = i1947[4]
  i1946.useRandomRow = !!i1947[5]
  i1946.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[6], i1946.frameOverTime)
  i1946.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[7], i1946.startFrame)
  i1946.cycleCount = i1947[8]
  i1946.rowIndex = i1947[9]
  i1946.flipU = i1947[10]
  i1946.flipV = i1947[11]
  i1946.spriteCount = i1947[12]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1948 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[1], i1948.x)
  i1948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[2], i1948.y)
  i1948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[3], i1948.z)
  i1948.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[4], i1948.speedModifier)
  i1948.space = i1949[5]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1950 = root || new pc.ParticleSystemNoise()
  var i1951 = data
  i1950.enabled = !!i1951[0]
  i1950.separateAxes = !!i1951[1]
  i1950.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[2], i1950.strengthX)
  i1950.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[3], i1950.strengthY)
  i1950.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[4], i1950.strengthZ)
  i1950.frequency = i1951[5]
  i1950.damping = !!i1951[6]
  i1950.octaveCount = i1951[7]
  i1950.octaveMultiplier = i1951[8]
  i1950.octaveScale = i1951[9]
  i1950.quality = i1951[10]
  i1950.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[11], i1950.scrollSpeed)
  i1950.scrollSpeedMultiplier = i1951[12]
  i1950.remapEnabled = !!i1951[13]
  i1950.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[14], i1950.remapX)
  i1950.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[15], i1950.remapY)
  i1950.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[16], i1950.remapZ)
  i1950.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[17], i1950.positionAmount)
  i1950.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[18], i1950.rotationAmount)
  i1950.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[19], i1950.sizeAmount)
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1952 = root || new pc.ParticleSystemInheritVelocity()
  var i1953 = data
  i1952.enabled = !!i1953[0]
  i1952.mode = i1953[1]
  i1952.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[2], i1952.curve)
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1954 = root || new pc.ParticleSystemForceOverLifetime()
  var i1955 = data
  i1954.enabled = !!i1955[0]
  i1954.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[1], i1954.x)
  i1954.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[2], i1954.y)
  i1954.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[3], i1954.z)
  i1954.space = i1955[4]
  i1954.randomized = !!i1955[5]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1956 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1957 = data
  i1956.enabled = !!i1957[0]
  i1956.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[1], i1956.limitX)
  i1956.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[2], i1956.limitY)
  i1956.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[3], i1956.limitZ)
  i1956.dampen = i1957[4]
  i1956.separateAxes = !!i1957[5]
  i1956.space = i1957[6]
  i1956.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[7], i1956.drag)
  i1956.multiplyDragByParticleSize = !!i1957[8]
  i1956.multiplyDragByParticleVelocity = !!i1957[9]
  return i1956
}

Deserializers["LootableItem"] = function (request, data, root) {
  var i1958 = root || request.c( 'LootableItem' )
  var i1959 = data
  i1958.OnLootableItemCollected = request.d('LootableItemEvent', i1959[0], i1958.OnLootableItemCollected)
  request.r(i1959[1], i1959[2], 0, i1958, 'item')
  i1958.kind = i1959[3]
  return i1958
}

Deserializers["LootableItemEvent"] = function (request, data, root) {
  var i1960 = root || request.c( 'LootableItemEvent' )
  var i1961 = data
  i1960.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1961[0], i1960.m_PersistentCalls)
  return i1960
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1963 = data
  var i1965 = i1963[0]
  var i1964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.add(request.d('UnityEngine.Events.PersistentCall', i1965[i + 0]));
  }
  i1962.m_Calls = i1964
  return i1962
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'm_Target')
  i1968.m_MethodName = i1969[2]
  i1968.m_Mode = i1969[3]
  i1968.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1969[4], i1968.m_Arguments)
  i1968.m_CallState = i1969[5]
  return i1968
}

Deserializers["LightPole"] = function (request, data, root) {
  var i1970 = root || request.c( 'LightPole' )
  var i1971 = data
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1973 = data
  i1972.pivot = new pc.Vec2( i1973[0], i1973[1] )
  i1972.anchorMin = new pc.Vec2( i1973[2], i1973[3] )
  i1972.anchorMax = new pc.Vec2( i1973[4], i1973[5] )
  i1972.sizeDelta = new pc.Vec2( i1973[6], i1973[7] )
  i1972.anchoredPosition3D = new pc.Vec3( i1973[8], i1973[9], i1973[10] )
  i1972.rotation = new pc.Quat(i1973[11], i1973[12], i1973[13], i1973[14])
  i1972.scale = new pc.Vec3( i1973[15], i1973[16], i1973[17] )
  return i1972
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1975 = data
  request.r(i1975[0], i1975[1], 0, i1974, 'm_FillRect')
  request.r(i1975[2], i1975[3], 0, i1974, 'm_HandleRect')
  i1974.m_Direction = i1975[4]
  i1974.m_MinValue = i1975[5]
  i1974.m_MaxValue = i1975[6]
  i1974.m_WholeNumbers = !!i1975[7]
  i1974.m_Value = i1975[8]
  i1974.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1975[9], i1974.m_OnValueChanged)
  i1974.m_Navigation = request.d('UnityEngine.UI.Navigation', i1975[10], i1974.m_Navigation)
  i1974.m_Transition = i1975[11]
  i1974.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1975[12], i1974.m_Colors)
  i1974.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1975[13], i1974.m_SpriteState)
  i1974.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1975[14], i1974.m_AnimationTriggers)
  i1974.m_Interactable = !!i1975[15]
  request.r(i1975[16], i1975[17], 0, i1974, 'm_TargetGraphic')
  return i1974
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1977 = data
  i1976.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1977[0], i1976.m_PersistentCalls)
  return i1976
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1979 = data
  i1978.m_Mode = i1979[0]
  request.r(i1979[1], i1979[2], 0, i1978, 'm_SelectOnUp')
  request.r(i1979[3], i1979[4], 0, i1978, 'm_SelectOnDown')
  request.r(i1979[5], i1979[6], 0, i1978, 'm_SelectOnLeft')
  request.r(i1979[7], i1979[8], 0, i1978, 'm_SelectOnRight')
  return i1978
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1981 = data
  i1980.m_NormalColor = new pc.Color(i1981[0], i1981[1], i1981[2], i1981[3])
  i1980.m_HighlightedColor = new pc.Color(i1981[4], i1981[5], i1981[6], i1981[7])
  i1980.m_PressedColor = new pc.Color(i1981[8], i1981[9], i1981[10], i1981[11])
  i1980.m_SelectedColor = new pc.Color(i1981[12], i1981[13], i1981[14], i1981[15])
  i1980.m_DisabledColor = new pc.Color(i1981[16], i1981[17], i1981[18], i1981[19])
  i1980.m_ColorMultiplier = i1981[20]
  i1980.m_FadeDuration = i1981[21]
  return i1980
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1983 = data
  request.r(i1983[0], i1983[1], 0, i1982, 'm_HighlightedSprite')
  request.r(i1983[2], i1983[3], 0, i1982, 'm_PressedSprite')
  request.r(i1983[4], i1983[5], 0, i1982, 'm_SelectedSprite')
  request.r(i1983[6], i1983[7], 0, i1982, 'm_DisabledSprite')
  return i1982
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1985 = data
  i1984.m_NormalTrigger = i1985[0]
  i1984.m_HighlightedTrigger = i1985[1]
  i1984.m_PressedTrigger = i1985[2]
  i1984.m_SelectedTrigger = i1985[3]
  i1984.m_DisabledTrigger = i1985[4]
  return i1984
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i1986 = root || request.c( 'WheatSliderWidget' )
  var i1987 = data
  request.r(i1987[0], i1987[1], 0, i1986, 'amountText')
  request.r(i1987[2], i1987[3], 0, i1986, 'BarIconImage')
  request.r(i1987[4], i1987[5], 0, i1986, 'WheatImage')
  request.r(i1987[6], i1987[7], 0, i1986, 'products')
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1989 = data
  i1988.cullTransparentMesh = !!i1989[0]
  return i1988
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.UI.Text' )
  var i1991 = data
  i1990.m_FontData = request.d('UnityEngine.UI.FontData', i1991[0], i1990.m_FontData)
  i1990.m_Text = i1991[1]
  request.r(i1991[2], i1991[3], 0, i1990, 'm_Material')
  i1990.m_Maskable = !!i1991[4]
  i1990.m_Color = new pc.Color(i1991[5], i1991[6], i1991[7], i1991[8])
  i1990.m_RaycastTarget = !!i1991[9]
  return i1990
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'm_Font')
  i1992.m_FontSize = i1993[2]
  i1992.m_FontStyle = i1993[3]
  i1992.m_BestFit = !!i1993[4]
  i1992.m_MinSize = i1993[5]
  i1992.m_MaxSize = i1993[6]
  i1992.m_Alignment = i1993[7]
  i1992.m_AlignByGeometry = !!i1993[8]
  i1992.m_RichText = !!i1993[9]
  i1992.m_HorizontalOverflow = i1993[10]
  i1992.m_VerticalOverflow = i1993[11]
  i1992.m_LineSpacing = i1993[12]
  return i1992
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.UI.Image' )
  var i1995 = data
  request.r(i1995[0], i1995[1], 0, i1994, 'm_Sprite')
  i1994.m_Type = i1995[2]
  i1994.m_PreserveAspect = !!i1995[3]
  i1994.m_FillCenter = !!i1995[4]
  i1994.m_FillMethod = i1995[5]
  i1994.m_FillAmount = i1995[6]
  i1994.m_FillClockwise = !!i1995[7]
  i1994.m_FillOrigin = i1995[8]
  i1994.m_UseSpriteMesh = !!i1995[9]
  i1994.m_PixelsPerUnitMultiplier = i1995[10]
  request.r(i1995[11], i1995[12], 0, i1994, 'm_Material')
  i1994.m_Maskable = !!i1995[13]
  i1994.m_Color = new pc.Color(i1995[14], i1995[15], i1995[16], i1995[17])
  i1994.m_RaycastTarget = !!i1995[18]
  return i1994
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1997 = data
  i1996.m_IgnoreLayout = !!i1997[0]
  i1996.m_MinWidth = i1997[1]
  i1996.m_MinHeight = i1997[2]
  i1996.m_PreferredWidth = i1997[3]
  i1996.m_PreferredHeight = i1997[4]
  i1996.m_FlexibleWidth = i1997[5]
  i1996.m_FlexibleHeight = i1997[6]
  i1996.m_LayoutPriority = i1997[7]
  return i1996
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i1998 = root || request.c( 'HealthBar' )
  var i1999 = data
  request.r(i1999[0], i1999[1], 0, i1998, 'HealthProvider')
  request.r(i1999[2], i1999[3], 0, i1998, 'progressImage')
  request.r(i1999[4], i1999[5], 0, i1998, 'BarIconImage')
  return i1998
}

Deserializers["ShieldBar"] = function (request, data, root) {
  var i2000 = root || request.c( 'ShieldBar' )
  var i2001 = data
  request.r(i2001[0], i2001[1], 0, i2000, 'progressImage')
  request.r(i2001[2], i2001[3], 0, i2000, 'barIconImage')
  request.r(i2001[4], i2001[5], 0, i2000, 'root')
  return i2000
}

Deserializers["UIActiveBoost"] = function (request, data, root) {
  var i2002 = root || request.c( 'UIActiveBoost' )
  var i2003 = data
  request.r(i2003[0], i2003[1], 0, i2002, 'imgIcon')
  request.r(i2003[2], i2003[3], 0, i2002, 'timerImg')
  var i2005 = i2003[4]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('UIActiveBoost+SpriteByKind', i2005[i + 0]) );
  }
  i2002.sprites = i2004
  i2002.Kind = i2003[5]
  return i2002
}

Deserializers["UIActiveBoost+SpriteByKind"] = function (request, data, root) {
  var i2008 = root || request.c( 'UIActiveBoost+SpriteByKind' )
  var i2009 = data
  i2008.Kind = i2009[0]
  request.r(i2009[1], i2009[2], 0, i2008, 'Sprite')
  return i2008
}

Deserializers["ShootButtonCtrl"] = function (request, data, root) {
  var i2010 = root || request.c( 'ShootButtonCtrl' )
  var i2011 = data
  request.r(i2011[0], i2011[1], 0, i2010, 'txtAmount')
  request.r(i2011[2], i2011[3], 0, i2010, 'timerImg')
  request.r(i2011[4], i2011[5], 0, i2010, 'products')
  return i2010
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.UI.Button' )
  var i2013 = data
  i2012.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2013[0], i2012.m_OnClick)
  i2012.m_Navigation = request.d('UnityEngine.UI.Navigation', i2013[1], i2012.m_Navigation)
  i2012.m_Transition = i2013[2]
  i2012.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2013[3], i2012.m_Colors)
  i2012.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2013[4], i2012.m_SpriteState)
  i2012.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2013[5], i2012.m_AnimationTriggers)
  i2012.m_Interactable = !!i2013[6]
  request.r(i2013[7], i2013[8], 0, i2012, 'm_TargetGraphic')
  return i2012
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2014 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2015 = data
  i2014.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2015[0], i2014.m_PersistentCalls)
  return i2014
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'm_ObjectArgument')
  i2016.m_ObjectArgumentAssemblyTypeName = i2017[2]
  i2016.m_IntArgument = i2017[3]
  i2016.m_FloatArgument = i2017[4]
  i2016.m_StringArgument = i2017[5]
  i2016.m_BoolArgument = !!i2017[6]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2019 = data
  i2018.mass = i2019[0]
  i2018.drag = i2019[1]
  i2018.angularDrag = i2019[2]
  i2018.useGravity = !!i2019[3]
  i2018.isKinematic = !!i2019[4]
  i2018.constraints = i2019[5]
  i2018.maxAngularVelocity = i2019[6]
  i2018.collisionDetectionMode = i2019[7]
  i2018.interpolation = i2019[8]
  return i2018
}

Deserializers["CarController"] = function (request, data, root) {
  var i2020 = root || request.c( 'CarController' )
  var i2021 = data
  var i2023 = i2021[0]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 2) {
  request.r(i2023[i + 0], i2023[i + 1], 2, i2022, '')
  }
  i2020.m_WheelColliders = i2022
  i2020.TorqueMultiplier = i2021[1]
  i2020.m_CarDriveType = i2021[2]
  var i2025 = i2021[3]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 2) {
  request.r(i2025[i + 0], i2025[i + 1], 2, i2024, '')
  }
  i2020.m_WheelMeshes = i2024
  var i2027 = i2021[4]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 2) {
  request.r(i2027[i + 0], i2027[i + 1], 2, i2026, '')
  }
  i2020.m_WheelEffects = i2026
  i2020.m_CentreOfMassOffset = new pc.Vec3( i2021[5], i2021[6], i2021[7] )
  i2020.m_MaximumSteerAngle = i2021[8]
  i2020.m_SteerHelper = i2021[9]
  i2020.m_TractionControl = i2021[10]
  i2020.m_FullTorqueOverAllWheels = i2021[11]
  i2020.m_ReverseTorque = i2021[12]
  i2020.m_MaxHandbrakeTorque = i2021[13]
  i2020.m_Downforce = i2021[14]
  i2020.m_SpeedType = i2021[15]
  i2020.m_Topspeed = i2021[16]
  i2020.m_RevRangeBoundary = i2021[17]
  i2020.m_SlipLimit = i2021[18]
  i2020.m_BrakeTorque = i2021[19]
  i2020.m_GearNum = i2021[20]
  request.r(i2021[21], i2021[22], 0, i2020, 'm_Rigidbody')
  return i2020
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i2034 = root || request.c( 'CarUserControl' )
  var i2035 = data
  i2034.CanMove = !!i2035[0]
  request.r(i2035[1], i2035[2], 0, i2034, 'pathCreator')
  request.r(i2035[3], i2035[4], 0, i2034, 'playerCarrot')
  request.r(i2035[5], i2035[6], 0, i2034, 'farPointInDirectionOfView')
  request.r(i2035[7], i2035[8], 0, i2034, 'ghostWriter')
  request.r(i2035[9], i2035[10], 0, i2034, 'carBody')
  request.r(i2035[11], i2035[12], 0, i2034, 'collisionParticlesLeft')
  request.r(i2035[13], i2035[14], 0, i2034, 'collisionParticlesRight')
  return i2034
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i2037 = data
  i2036.engineSoundStyle = i2037[0]
  request.r(i2037[1], i2037[2], 0, i2036, 'lowAccelClip')
  request.r(i2037[3], i2037[4], 0, i2036, 'lowDecelClip')
  request.r(i2037[5], i2037[6], 0, i2036, 'highAccelClip')
  request.r(i2037[7], i2037[8], 0, i2036, 'highDecelClip')
  i2036.pitchMultiplier = i2037[9]
  i2036.lowPitchMin = i2037[10]
  i2036.lowPitchMax = i2037[11]
  i2036.highPitchMultiplier = i2037[12]
  i2036.maxRolloffDistance = i2037[13]
  i2036.dopplerLevel = i2037[14]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2039 = data
  i2038.center = new pc.Vec3( i2039[0], i2039[1], i2039[2] )
  i2038.size = new pc.Vec3( i2039[3], i2039[4], i2039[5] )
  i2038.enabled = !!i2039[6]
  i2038.isTrigger = !!i2039[7]
  request.r(i2039[8], i2039[9], 0, i2038, 'material')
  return i2038
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i2040 = root || request.c( 'RaceCar' )
  var i2041 = data
  i2040.Owner = i2041[0]
  i2040.Score = i2041[1]
  request.r(i2041[2], i2041[3], 0, i2040, 'boosts')
  request.r(i2041[4], i2041[5], 0, i2040, 'products')
  request.r(i2041[6], i2041[7], 0, i2040, 'boostsEffectPosition')
  request.r(i2041[8], i2041[9], 0, i2040, 'effectSheildPrefab')
  request.r(i2041[10], i2041[11], 0, i2040, 'effectDoublePrefab')
  return i2040
}

Deserializers["HealthController"] = function (request, data, root) {
  var i2042 = root || request.c( 'HealthController' )
  var i2043 = data
  i2042.Health = i2043[0]
  i2042.MaxHealth = i2043[1]
  i2042.Shield = i2043[2]
  i2042.MaxShield = i2043[3]
  request.r(i2043[4], i2043[5], 0, i2042, 'MainScreen')
  request.r(i2043[6], i2043[7], 0, i2042, 'LossScreen')
  request.r(i2043[8], i2043[9], 0, i2042, 'boosts')
  return i2042
}

Deserializers["Gun"] = function (request, data, root) {
  var i2044 = root || request.c( 'Gun' )
  var i2045 = data
  request.r(i2045[0], i2045[1], 0, i2044, 'rocketPrefab')
  request.r(i2045[2], i2045[3], 0, i2044, 'carUserControl')
  request.r(i2045[4], i2045[5], 0, i2044, 'products')
  return i2044
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i2046 = root || request.c( 'JustWheelMeshes' )
  var i2047 = data
  var i2049 = i2047[0]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 2) {
  request.r(i2049[i + 0], i2049[i + 1], 2, i2048, '')
  }
  i2046.m_WheelMeshes = i2048
  return i2046
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i2050 = root || request.c( 'BlobShadowMovement' )
  var i2051 = data
  request.r(i2051[0], i2051[1], 0, i2050, 'Target')
  i2050.Offset = new pc.Vec3( i2051[2], i2051[3], i2051[4] )
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2053 = data
  request.r(i2053[0], i2053[1], 0, i2052, 'clip')
  i2052.playOnAwake = !!i2053[2]
  i2052.loop = !!i2053[3]
  i2052.enabled = !!i2053[4]
  return i2052
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i2054 = root || request.c( 'WheelEffects' )
  var i2055 = data
  request.r(i2055[0], i2055[1], 0, i2054, 'SkidTrailPrefab')
  request.r(i2055[2], i2055[3], 0, i2054, 'skidParticles')
  return i2054
}

Deserializers["Rocket"] = function (request, data, root) {
  var i2056 = root || request.c( 'Rocket' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'jetStream')
  request.r(i2057[2], i2057[3], 0, i2056, 'explosionPrefab')
  return i2056
}

Deserializers["Explosion"] = function (request, data, root) {
  var i2058 = root || request.c( 'Explosion' )
  var i2059 = data
  request.r(i2059[0], i2059[1], 0, i2058, 'explosionParticleSystem')
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, 'animatorController')
  i2060.updateMode = i2061[2]
  var i2063 = i2061[3]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 2) {
  request.r(i2063[i + 0], i2063[i + 1], 2, i2062, '')
  }
  i2060.humanBones = i2062
  i2060.enabled = !!i2061[4]
  return i2060
}

Deserializers["DriverDescription"] = function (request, data, root) {
  var i2066 = root || request.c( 'DriverDescription' )
  var i2067 = data
  var i2069 = i2067[0]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 2) {
  request.r(i2069[i + 0], i2069[i + 1], 2, i2068, '')
  }
  i2066.driverPrefab = i2068
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2071 = data
  i2070.enabled = !!i2071[0]
  request.r(i2071[1], i2071[2], 0, i2070, 'sharedMaterial')
  var i2073 = i2071[3]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 2) {
  request.r(i2073[i + 0], i2073[i + 1], 2, i2072, '')
  }
  i2070.sharedMaterials = i2072
  i2070.receiveShadows = !!i2071[4]
  i2070.shadowCastingMode = i2071[5]
  i2070.sortingLayerID = i2071[6]
  i2070.sortingOrder = i2071[7]
  i2070.lightmapIndex = i2071[8]
  i2070.lightmapSceneIndex = i2071[9]
  i2070.lightmapScaleOffset = new pc.Vec4( i2071[10], i2071[11], i2071[12], i2071[13] )
  i2070.lightProbeUsage = i2071[14]
  i2070.reflectionProbeUsage = i2071[15]
  request.r(i2071[16], i2071[17], 0, i2070, 'sharedMesh')
  var i2075 = i2071[18]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 2) {
  request.r(i2075[i + 0], i2075[i + 1], 2, i2074, '')
  }
  i2070.bones = i2074
  i2070.updateWhenOffscreen = !!i2071[19]
  i2070.localBounds = i2071[20]
  request.r(i2071[21], i2071[22], 0, i2070, 'rootBone')
  var i2077 = i2071[23]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2077[i + 0]) );
  }
  i2070.blendShapesWeights = i2076
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2081 = data
  i2080.weight = i2081[0]
  return i2080
}

Deserializers["TrackHandles"] = function (request, data, root) {
  var i2082 = root || request.c( 'TrackHandles' )
  var i2083 = data
  request.r(i2083[0], i2083[1], 0, i2082, 'MainPath')
  i2082.OnFinishReached = request.d('UnityEngine.Events.UnityEvent', i2083[2], i2082.OnFinishReached)
  request.r(i2083[3], i2083[4], 0, i2082, 'Root')
  return i2082
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2085 = data
  i2084.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2085[0], i2084.m_PersistentCalls)
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2087 = data
  i2086.enabled = !!i2087[0]
  i2086.isTrigger = !!i2087[1]
  request.r(i2087[2], i2087[3], 0, i2086, 'material')
  request.r(i2087[4], i2087[5], 0, i2086, 'sharedMesh')
  i2086.convex = !!i2087[6]
  return i2086
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i2088 = root || request.c( 'FinishTrigger' )
  var i2089 = data
  request.r(i2089[0], i2089[1], 0, i2088, 'trackHandles')
  return i2088
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i2090 = root || request.c( 'PathCreation.PathCreator' )
  var i2091 = data
  i2090.editorData = request.d('PathCreation.PathCreatorData', i2091[0], i2090.editorData)
  i2090.initialized = !!i2091[1]
  return i2090
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i2092 = root || request.c( 'PathCreation.PathCreatorData' )
  var i2093 = data
  i2092.vertexPathMaxAngleError = i2093[0]
  i2092.vertexPathMinVertexSpacing = i2093[1]
  i2092.showTransformTool = !!i2093[2]
  i2092.showPathBounds = !!i2093[3]
  i2092.showPerSegmentBounds = !!i2093[4]
  i2092.displayAnchorPoints = !!i2093[5]
  i2092.displayControlPoints = !!i2093[6]
  i2092.bezierHandleScale = i2093[7]
  i2092.globalDisplaySettingsFoldout = !!i2093[8]
  i2092.keepConstantHandleSize = !!i2093[9]
  i2092.showNormalsInVertexMode = !!i2093[10]
  i2092.showBezierPathInVertexMode = !!i2093[11]
  i2092.showDisplayOptions = !!i2093[12]
  i2092.showPathOptions = !!i2093[13]
  i2092.showVertexPathDisplayOptions = !!i2093[14]
  i2092.showVertexPathOptions = !!i2093[15]
  i2092.showNormals = !!i2093[16]
  i2092.showNormalsHelpInfo = !!i2093[17]
  i2092.tabIndex = i2093[18]
  i2092._bezierPath = request.d('PathCreation.BezierPath', i2093[19], i2092._bezierPath)
  i2092.vertexPathUpToDate = !!i2093[20]
  return i2092
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i2094 = root || request.c( 'PathCreation.BezierPath' )
  var i2095 = data
  var i2097 = i2095[0]
  var i2096 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2097.length; i += 3) {
    i2096.add(new pc.Vec3( i2097[i + 0], i2097[i + 1], i2097[i + 2] ));
  }
  i2094.points = i2096
  i2094.isClosed = !!i2095[1]
  i2094.space = i2095[2]
  i2094.controlMode = i2095[3]
  i2094.autoControlLength = i2095[4]
  i2094.boundsUpToDate = !!i2095[5]
  var i2099 = i2095[6]
  var i2098 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.add(i2099[i + 0]);
  }
  i2094.perAnchorNormalsAngle = i2098
  i2094.globalNormalsAngle = i2095[7]
  i2094.flipNormals = !!i2095[8]
  return i2094
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2104 = root || request.c( 'GameManager' )
  var i2105 = data
  request.r(i2105[0], i2105[1], 0, i2104, 'MainCamera')
  i2104.LandscapeFov = i2105[2]
  i2104.PortraitFov = i2105[3]
  i2104.WheatCullDistance = i2105[4]
  request.r(i2105[5], i2105[6], 0, i2104, 'CountdownWidget')
  request.r(i2105[7], i2105[8], 0, i2104, 'TutorialWindow')
  request.r(i2105[9], i2105[10], 0, i2104, 'MainBackroundImage')
  request.r(i2105[11], i2105[12], 0, i2104, 'WinScreen')
  request.r(i2105[13], i2105[14], 0, i2104, 'LoseScreen')
  request.r(i2105[15], i2105[16], 0, i2104, 'MainScreen')
  request.r(i2105[17], i2105[18], 0, i2104, 'btnLeft')
  request.r(i2105[19], i2105[20], 0, i2104, 'btnRight')
  request.r(i2105[21], i2105[22], 0, i2104, 'healthBar')
  var i2107 = i2105[23]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 2) {
  request.r(i2107[i + 0], i2107[i + 1], 2, i2106, '')
  }
  i2104.Opponents = i2106
  request.r(i2105[24], i2105[25], 0, i2104, 'PlayerCar')
  request.r(i2105[26], i2105[27], 0, i2104, 'CarUserControl')
  i2104.Position = i2105[28]
  request.r(i2105[29], i2105[30], 0, i2104, 'LastCheckpoint')
  request.r(i2105[31], i2105[32], 0, i2104, 'healthController')
  var i2109 = i2105[33]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 2) {
  request.r(i2109[i + 0], i2109[i + 1], 2, i2108, '')
  }
  i2104.tracktors = i2108
  var i2111 = i2105[34]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 2) {
  request.r(i2111[i + 0], i2111[i + 1], 2, i2110, '')
  }
  i2104.drivers = i2110
  var i2113 = i2105[35]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 2) {
  request.r(i2113[i + 0], i2113[i + 1], 2, i2112, '')
  }
  i2104.trackPrefabs = i2112
  request.r(i2105[36], i2105[37], 0, i2104, 'trackParent')
  i2104._WheatCullDistance = i2105[38]
  request.r(i2105[39], i2105[40], 0, i2104, 'trackContentGenerator')
  request.r(i2105[41], i2105[42], 0, i2104, 'wheatGenerator')
  request.r(i2105[43], i2105[44], 0, i2104, 'roadGenerator')
  request.r(i2105[45], i2105[46], 0, i2104, 'ghostReader')
  return i2104
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i2118 = root || request.c( 'LunaUIFields' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'ObjectiveHintText')
  i2118.ObjectiveHintString = i2119[2]
  request.r(i2119[3], i2119[4], 0, i2118, 'LevelFailedButtonText')
  i2118.LevelFailedButtonString = i2119[5]
  request.r(i2119[6], i2119[7], 0, i2118, 'LevelCompleteButtonText')
  i2118.LevelCompleteButtonString = i2119[8]
  return i2118
}

Deserializers["Localization"] = function (request, data, root) {
  var i2120 = root || request.c( 'Localization' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, 'englishAsset')
  request.r(i2121[2], i2121[3], 0, i2120, 'russianAsset')
  return i2120
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i2122 = root || request.c( 'WheatGenerator' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'wheatPiece')
  request.r(i2123[2], i2123[3], 0, i2122, 'trackContentGenerator')
  request.r(i2123[4], i2123[5], 0, i2122, 'carUserControl')
  return i2122
}

Deserializers["Products"] = function (request, data, root) {
  var i2124 = root || request.c( 'Products' )
  var i2125 = data
  i2124.OnProductsNumberChanged = request.d('ProductsEvent', i2125[0], i2124.OnProductsNumberChanged)
  return i2124
}

Deserializers["ProductsEvent"] = function (request, data, root) {
  var i2126 = root || request.c( 'ProductsEvent' )
  var i2127 = data
  i2126.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2127[0], i2126.m_PersistentCalls)
  return i2126
}

Deserializers["TrackContentGenerator"] = function (request, data, root) {
  var i2128 = root || request.c( 'TrackContentGenerator' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'healthController')
  var i2131 = i2129[2]
  var i2130 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2131.length; i += 2) {
  request.r(i2131[i + 0], i2131[i + 1], 1, i2130, '')
  }
  i2128.AlreadyGenerated = i2130
  request.r(i2129[3], i2129[4], 0, i2128, 'parentForPlacing')
  var i2133 = i2129[5]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 2) {
  request.r(i2133[i + 0], i2133[i + 1], 2, i2132, '')
  }
  i2128.obstaclesPrefabs = i2132
  var i2135 = i2129[6]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 2) {
  request.r(i2135[i + 0], i2135[i + 1], 2, i2134, '')
  }
  i2128.hardObstaclesPrefabs = i2134
  var i2137 = i2129[7]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 2) {
  request.r(i2137[i + 0], i2137[i + 1], 2, i2136, '')
  }
  i2128.bonusesPrefabs = i2136
  request.r(i2129[8], i2129[9], 0, i2128, 'configFile')
  request.r(i2129[10], i2129[11], 0, i2128, 'products')
  request.r(i2129[12], i2129[13], 0, i2128, 'boosts')
  return i2128
}

Deserializers["Boosts"] = function (request, data, root) {
  var i2140 = root || request.c( 'Boosts' )
  var i2141 = data
  var i2143 = i2141[0]
  var i2142 = new (System.Collections.Generic.List$1(Bridge.ns('Boosts+DataItem')))
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.add(request.d('Boosts+DataItem', i2143[i + 0]));
  }
  i2140.Data = i2142
  return i2140
}

Deserializers["Boosts+DataItem"] = function (request, data, root) {
  var i2146 = root || request.c( 'Boosts+DataItem' )
  var i2147 = data
  i2146.Kind = i2147[0]
  i2146.TimeLeft = i2147[1]
  return i2146
}

Deserializers["GhostWriter"] = function (request, data, root) {
  var i2148 = root || request.c( 'GhostWriter' )
  var i2149 = data
  i2148.timer = i2149[0]
  var i2151 = i2149[1]
  var i2150 = new (System.Collections.Generic.List$1(Bridge.ns('GhostWriter+Entry')))
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.add(request.d('GhostWriter+Entry', i2151[i + 0]));
  }
  i2148.data = i2150
  request.r(i2149[2], i2149[3], 0, i2148, 'carUserControl')
  return i2148
}

Deserializers["GhostWriter+Entry"] = function (request, data, root) {
  var i2154 = root || request.c( 'GhostWriter+Entry' )
  var i2155 = data
  i2154.kind = i2155[0]
  i2154.time = i2155[1]
  i2154.distance = i2155[2]
  i2154.sideOffset = i2155[3]
  i2154.speed = i2155[4]
  return i2154
}

Deserializers["GhostReader"] = function (request, data, root) {
  var i2156 = root || request.c( 'GhostReader' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'ghost')
  request.r(i2157[2], i2157[3], 0, i2156, 'pathCreator')
  i2156.timer = i2157[4]
  var i2159 = i2157[5]
  var i2158 = new (System.Collections.Generic.List$1(Bridge.ns('GhostReader+Entry')))
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.add(request.d('GhostReader+Entry', i2159[i + 0]));
  }
  i2156.data = i2158
  return i2156
}

Deserializers["GhostReader+Entry"] = function (request, data, root) {
  var i2162 = root || request.c( 'GhostReader+Entry' )
  var i2163 = data
  i2162.kind = i2163[0]
  i2162.time = i2163[1]
  i2162.distance = i2163[2]
  i2162.sideOffset = i2163[3]
  i2162.speed = i2163[4]
  return i2162
}

Deserializers["RoadGenerator"] = function (request, data, root) {
  var i2164 = root || request.c( 'RoadGenerator' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'fencePiece')
  return i2164
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i2167 = data
  i2166.m_MoveSpeed = i2167[0]
  i2166.m_TurnSpeed = i2167[1]
  i2166.m_RollSpeed = i2167[2]
  i2166.m_FollowVelocity = !!i2167[3]
  i2166.m_FollowTilt = !!i2167[4]
  i2166.m_SpinTurnLimit = i2167[5]
  i2166.m_TargetVelocityLowerLimit = i2167[6]
  i2166.m_SmoothTurnTime = i2167[7]
  request.r(i2167[8], i2167[9], 0, i2166, 'm_Target')
  i2166.m_AutoTargetPlayer = !!i2167[10]
  i2166.m_UpdateType = i2167[11]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2169 = data
  i2168.enabled = !!i2169[0]
  i2168.aspect = i2169[1]
  i2168.orthographic = !!i2169[2]
  i2168.orthographicSize = i2169[3]
  i2168.backgroundColor = new pc.Color(i2169[4], i2169[5], i2169[6], i2169[7])
  i2168.nearClipPlane = i2169[8]
  i2168.farClipPlane = i2169[9]
  i2168.fieldOfView = i2169[10]
  i2168.depth = i2169[11]
  i2168.clearFlags = i2169[12]
  i2168.cullingMask = i2169[13]
  i2168.rect = i2169[14]
  request.r(i2169[15], i2169[16], 0, i2168, 'targetTexture')
  return i2168
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i2170 = root || request.c( 'CameraFollower' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'Target')
  i2170.PositionOffset = new pc.Vec3( i2171[2], i2171[3], i2171[4] )
  i2170.RotationOffset = new pc.Vec3( i2171[5], i2171[6], i2171[7] )
  i2170.CameraSpeed = i2171[8]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2173 = data
  i2172.enabled = !!i2173[0]
  i2172.type = i2173[1]
  i2172.color = new pc.Color(i2173[2], i2173[3], i2173[4], i2173[5])
  i2172.cullingMask = i2173[6]
  i2172.intensity = i2173[7]
  i2172.range = i2173[8]
  i2172.spotAngle = i2173[9]
  i2172.shadows = i2173[10]
  i2172.shadowNormalBias = i2173[11]
  i2172.shadowBias = i2173[12]
  i2172.shadowStrength = i2173[13]
  i2172.lightmapBakeType = i2173[14]
  i2172.renderMode = i2173[15]
  request.r(i2173[16], i2173[17], 0, i2172, 'cookie')
  i2172.cookieSize = i2173[18]
  return i2172
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2175 = data
  request.r(i2175[0], i2175[1], 0, i2174, 'm_FirstSelected')
  i2174.m_sendNavigationEvents = !!i2175[2]
  i2174.m_DragThreshold = i2175[3]
  return i2174
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2177 = data
  i2176.m_HorizontalAxis = i2177[0]
  i2176.m_VerticalAxis = i2177[1]
  i2176.m_SubmitButton = i2177[2]
  i2176.m_CancelButton = i2177[3]
  i2176.m_InputActionsPerSecond = i2177[4]
  i2176.m_RepeatDelay = i2177[5]
  i2176.m_ForceModuleActive = !!i2177[6]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2179 = data
  i2178.enabled = !!i2179[0]
  i2178.planeDistance = i2179[1]
  i2178.referencePixelsPerUnit = i2179[2]
  i2178.isFallbackOverlay = !!i2179[3]
  i2178.renderMode = i2179[4]
  i2178.renderOrder = i2179[5]
  i2178.sortingLayerName = i2179[6]
  i2178.sortingOrder = i2179[7]
  i2178.scaleFactor = i2179[8]
  request.r(i2179[9], i2179[10], 0, i2178, 'worldCamera')
  i2178.overrideSorting = !!i2179[11]
  i2178.pixelPerfect = !!i2179[12]
  i2178.targetDisplay = i2179[13]
  i2178.overridePixelPerfect = !!i2179[14]
  return i2178
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2181 = data
  i2180.m_UiScaleMode = i2181[0]
  i2180.m_ReferencePixelsPerUnit = i2181[1]
  i2180.m_ScaleFactor = i2181[2]
  i2180.m_ReferenceResolution = new pc.Vec2( i2181[3], i2181[4] )
  i2180.m_ScreenMatchMode = i2181[5]
  i2180.m_MatchWidthOrHeight = i2181[6]
  i2180.m_PhysicalUnit = i2181[7]
  i2180.m_FallbackScreenDPI = i2181[8]
  i2180.m_DefaultSpriteDPI = i2181[9]
  i2180.m_DynamicPixelsPerUnit = i2181[10]
  return i2180
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2183 = data
  i2182.m_IgnoreReversedGraphics = !!i2183[0]
  i2182.m_BlockingObjects = i2183[1]
  i2182.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2183[2] )
  return i2182
}

Deserializers["Countdown"] = function (request, data, root) {
  var i2184 = root || request.c( 'Countdown' )
  var i2185 = data
  request.r(i2185[0], i2185[1], 0, i2184, 'CountdownText')
  request.r(i2185[2], i2185[3], 0, i2184, 'Go_Image')
  request.r(i2185[4], i2185[5], 0, i2184, 'Outline')
  request.r(i2185[6], i2185[7], 0, i2184, 'MainWindow')
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2187 = data
  i2186.m_Alpha = i2187[0]
  i2186.m_Interactable = !!i2187[1]
  i2186.m_BlocksRaycasts = !!i2187[2]
  i2186.m_IgnoreParentGroups = !!i2187[3]
  i2186.enabled = !!i2187[4]
  return i2186
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2189 = data
  i2188.m_EffectColor = new pc.Color(i2189[0], i2189[1], i2189[2], i2189[3])
  i2188.m_EffectDistance = new pc.Vec2( i2189[4], i2189[5] )
  i2188.m_UseGraphicAlpha = !!i2189[6]
  return i2188
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i2190 = root || request.c( 'WinScreenWidget' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'RaceCar')
  request.r(i2191[2], i2191[3], 0, i2190, 'WheatText')
  request.r(i2191[4], i2191[5], 0, i2190, 'GemText')
  request.r(i2191[6], i2191[7], 0, i2190, 'GameManager')
  request.r(i2191[8], i2191[9], 0, i2190, 'products')
  return i2190
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i2192 = root || request.c( 'EndGameButton' )
  var i2193 = data
  request.r(i2193[0], i2193[1], 0, i2192, 'GameManager')
  return i2192
}

Deserializers["LongTapButton"] = function (request, data, root) {
  var i2194 = root || request.c( 'LongTapButton' )
  var i2195 = data
  i2194.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i2195[0], i2194.OnMouseDownEvent)
  i2194.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i2195[1], i2194.OnMouseUpEvent)
  return i2194
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2197 = data
  i2196.m_Spacing = i2197[0]
  i2196.m_ChildForceExpandWidth = !!i2197[1]
  i2196.m_ChildForceExpandHeight = !!i2197[2]
  i2196.m_ChildControlWidth = !!i2197[3]
  i2196.m_ChildControlHeight = !!i2197[4]
  i2196.m_ChildScaleWidth = !!i2197[5]
  i2196.m_ChildScaleHeight = !!i2197[6]
  i2196.m_Padding = UnityEngine.RectOffset.FromPaddings(i2197[7], i2197[8], i2197[9], i2197[10])
  i2196.m_ChildAlignment = i2197[11]
  return i2196
}

Deserializers["BoostsPanelCtrl"] = function (request, data, root) {
  var i2198 = root || request.c( 'BoostsPanelCtrl' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'boosts')
  request.r(i2199[2], i2199[3], 0, i2198, 'wgtBoostPrefab')
  return i2198
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i2200 = root || request.c( 'TimeSinceStartup' )
  var i2201 = data
  request.r(i2201[0], i2201[1], 0, i2200, 'Text')
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2203 = data
  i2202.name = i2203[0]
  i2202.atlasId = i2203[1]
  i2202.mipmapCount = i2203[2]
  i2202.hdr = !!i2203[3]
  i2202.size = i2203[4]
  i2202.anisoLevel = i2203[5]
  i2202.filterMode = i2203[6]
  i2202.wrapMode = i2203[7]
  var i2205 = i2203[8]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 4) {
    i2204.push( UnityEngine.Rect.MinMaxRect(i2205[i + 0], i2205[i + 1], i2205[i + 2], i2205[i + 3]) );
  }
  i2202.rects = i2204
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.index = i2209[1]
  i2208.startup = !!i2209[2]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2211 = data
  i2210.ambientIntensity = i2211[0]
  i2210.reflectionIntensity = i2211[1]
  i2210.ambientMode = i2211[2]
  i2210.ambientLight = new pc.Color(i2211[3], i2211[4], i2211[5], i2211[6])
  i2210.ambientSkyColor = new pc.Color(i2211[7], i2211[8], i2211[9], i2211[10])
  i2210.ambientGroundColor = new pc.Color(i2211[11], i2211[12], i2211[13], i2211[14])
  i2210.ambientEquatorColor = new pc.Color(i2211[15], i2211[16], i2211[17], i2211[18])
  i2210.fogColor = new pc.Color(i2211[19], i2211[20], i2211[21], i2211[22])
  i2210.fogEndDistance = i2211[23]
  i2210.fogStartDistance = i2211[24]
  i2210.fogDensity = i2211[25]
  i2210.fog = !!i2211[26]
  request.r(i2211[27], i2211[28], 0, i2210, 'skybox')
  i2210.fogMode = i2211[29]
  var i2213 = i2211[30]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2213[i + 0]) );
  }
  i2210.lightmaps = i2212
  i2210.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2211[31], i2210.lightProbes)
  i2210.lightmapsMode = i2211[32]
  i2210.environmentLightingMode = i2211[33]
  i2210.ambientProbe = new pc.SphericalHarmonicsL2(i2211[34])
  request.r(i2211[35], i2211[36], 0, i2210, 'customReflection')
  request.r(i2211[37], i2211[38], 0, i2210, 'defaultReflection')
  i2210.defaultReflectionMode = i2211[39]
  i2210.defaultReflectionResolution = i2211[40]
  i2210.sunLightObjectId = i2211[41]
  i2210.pixelLightCount = i2211[42]
  i2210.defaultReflectionHDR = !!i2211[43]
  i2210.hasLightDataAsset = !!i2211[44]
  i2210.hasManualGenerate = !!i2211[45]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2217 = data
  request.r(i2217[0], i2217[1], 0, i2216, 'lightmapColor')
  request.r(i2217[2], i2217[3], 0, i2216, 'lightmapDirection')
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2218 = root || new UnityEngine.LightProbes()
  var i2219 = data
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2227 = data
  i2226.name = i2227[0]
  var i2229 = i2227[1]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2229[i + 0]) );
  }
  i2226.passes = i2228
  var i2231 = i2227[2]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2231[i + 0]) );
  }
  i2226.defaultParameterValues = i2230
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2234 = root || new pc.UnityShaderPass()
  var i2235 = data
  i2234.passType = i2235[0]
  i2234.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[1], i2234.zTest)
  i2234.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[2], i2234.zWrite)
  i2234.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[3], i2234.culling)
  i2234.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2235[4], i2234.blending)
  i2234.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2235[5], i2234.alphaBlending)
  i2234.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[6], i2234.colorWriteMask)
  i2234.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[7], i2234.offsetUnits)
  i2234.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[8], i2234.offsetFactor)
  i2234.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[9], i2234.stencilRef)
  i2234.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[10], i2234.stencilReadMask)
  i2234.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[11], i2234.stencilWriteMask)
  i2234.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2235[12], i2234.stencilOp)
  i2234.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2235[13], i2234.stencilOpFront)
  i2234.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2235[14], i2234.stencilOpBack)
  var i2237 = i2235[15]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2237[i + 0]) );
  }
  i2234.tags = i2236
  var i2239 = i2235[16]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2239[i + 0]) );
  }
  i2234.variants = i2238
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2241 = data
  i2240.val = i2241[0]
  i2240.name = i2241[1]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2243 = data
  i2242.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[0], i2242.src)
  i2242.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[1], i2242.dst)
  i2242.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[2], i2242.op)
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2245 = data
  i2244.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[0], i2244.pass)
  i2244.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[1], i2244.fail)
  i2244.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[2], i2244.zFail)
  i2244.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[3], i2244.comp)
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2249 = data
  i2248.name = i2249[0]
  i2248.value = i2249[1]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2253 = data
  var i2255 = i2253[0]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( i2255[i + 0] );
  }
  i2252.keywords = i2254
  i2252.vertexProgram = i2253[1]
  i2252.fragmentProgram = i2253[2]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2261 = data
  i2260.name = i2261[0]
  i2260.type = i2261[1]
  i2260.value = new pc.Vec4( i2261[2], i2261[3], i2261[4], i2261[5] )
  i2260.textureValue = i2261[6]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2263 = data
  i2262.name = i2263[0]
  request.r(i2263[1], i2263[2], 0, i2262, 'texture')
  i2262.aabb = i2263[3]
  i2262.vertices = i2263[4]
  i2262.triangles = i2263[5]
  i2262.textureRect = UnityEngine.Rect.MinMaxRect(i2263[6], i2263[7], i2263[8], i2263[9])
  i2262.packedRect = UnityEngine.Rect.MinMaxRect(i2263[10], i2263[11], i2263[12], i2263[13])
  i2262.border = new pc.Vec4( i2263[14], i2263[15], i2263[16], i2263[17] )
  i2262.transparency = i2263[18]
  i2262.bounds = i2263[19]
  i2262.pixelsPerUnit = i2263[20]
  i2262.textureWidth = i2263[21]
  i2262.textureHeight = i2263[22]
  i2262.nativeSize = new pc.Vec2( i2263[23], i2263[24] )
  i2262.pivot = new pc.Vec2( i2263[25], i2263[26] )
  i2262.textureRectOffset = new pc.Vec2( i2263[27], i2263[28] )
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.wrapMode = i2265[1]
  i2264.isLooping = !!i2265[2]
  i2264.length = i2265[3]
  var i2267 = i2265[4]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2267[i + 0]) );
  }
  i2264.curves = i2266
  var i2269 = i2265[5]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2269[i + 0]) );
  }
  i2264.events = i2268
  i2264.halfPrecision = !!i2265[6]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2273 = data
  i2272.path = i2273[0]
  i2272.componentType = i2273[1]
  i2272.property = i2273[2]
  i2272.keys = i2273[3]
  var i2275 = i2273[4]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2275[i + 0]) );
  }
  i2272.objectReferenceKeys = i2274
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2279 = data
  i2278.time = i2279[0]
  request.r(i2279[1], i2279[2], 0, i2278, 'value')
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2283 = data
  i2282.functionName = i2283[0]
  i2282.floatParameter = i2283[1]
  i2282.intParameter = i2283[2]
  i2282.stringParameter = i2283[3]
  request.r(i2283[4], i2283[5], 0, i2282, 'objectReferenceParameter')
  i2282.time = i2283[6]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2285 = data
  i2284.name = i2285[0]
  i2284.ascent = i2285[1]
  i2284.originalLineHeight = i2285[2]
  i2284.fontSize = i2285[3]
  var i2287 = i2285[4]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2287[i + 0]) );
  }
  i2284.characterInfo = i2286
  request.r(i2285[5], i2285[6], 0, i2284, 'texture')
  i2284.originalFontSize = i2285[7]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2291 = data
  i2290.index = i2291[0]
  i2290.advance = i2291[1]
  i2290.bearing = i2291[2]
  i2290.glyphWidth = i2291[3]
  i2290.glyphHeight = i2291[4]
  i2290.minX = i2291[5]
  i2290.maxX = i2291[6]
  i2290.minY = i2291[7]
  i2290.maxY = i2291[8]
  i2290.uvBottomLeftX = i2291[9]
  i2290.uvBottomLeftY = i2291[10]
  i2290.uvBottomRightX = i2291[11]
  i2290.uvBottomRightY = i2291[12]
  i2290.uvTopLeftX = i2291[13]
  i2290.uvTopLeftY = i2291[14]
  i2290.uvTopRightX = i2291[15]
  i2290.uvTopRightY = i2291[16]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2293 = data
  i2292.name = i2293[0]
  var i2295 = i2293[1]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2295[i + 0]) );
  }
  i2292.states = i2294
  var i2297 = i2293[2]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2297[i + 0]) );
  }
  i2292.layers = i2296
  var i2299 = i2293[3]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2299[i + 0]) );
  }
  i2292.parameters = i2298
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2303 = data
  i2302.cycleOffset = i2303[0]
  i2302.cycleOffsetParameter = i2303[1]
  i2302.cycleOffsetParameterActive = !!i2303[2]
  i2302.mirror = !!i2303[3]
  i2302.mirrorParameter = i2303[4]
  i2302.mirrorParameterActive = !!i2303[5]
  i2302.motionId = i2303[6]
  i2302.nameHash = i2303[7]
  i2302.fullPathHash = i2303[8]
  i2302.speed = i2303[9]
  i2302.speedParameter = i2303[10]
  i2302.speedParameterActive = !!i2303[11]
  i2302.tag = i2303[12]
  i2302.name = i2303[13]
  i2302.writeDefaultValues = !!i2303[14]
  var i2305 = i2303[15]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2305[i + 0]) );
  }
  i2302.transitions = i2304
  var i2307 = i2303[16]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 2) {
  request.r(i2307[i + 0], i2307[i + 1], 2, i2306, '')
  }
  i2302.behaviours = i2306
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2311 = data
  i2310.fullPath = i2311[0]
  i2310.canTransitionToSelf = !!i2311[1]
  i2310.duration = i2311[2]
  i2310.exitTime = i2311[3]
  i2310.hasExitTime = !!i2311[4]
  i2310.hasFixedDuration = !!i2311[5]
  i2310.interruptionSource = i2311[6]
  i2310.offset = i2311[7]
  i2310.orderedInterruption = !!i2311[8]
  i2310.destinationStateNameHash = i2311[9]
  i2310.destinationStateMachineId = i2311[10]
  i2310.isExit = !!i2311[11]
  i2310.mute = !!i2311[12]
  i2310.solo = !!i2311[13]
  var i2313 = i2311[14]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2313[i + 0]) );
  }
  i2310.conditions = i2312
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2319 = data
  i2318.blendingMode = i2319[0]
  i2318.defaultWeight = i2319[1]
  i2318.name = i2319[2]
  i2318.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2319[3], i2318.stateMachine)
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2321 = data
  i2320.id = i2321[0]
  i2320.defaultStateNameHash = i2321[1]
  var i2323 = i2321[2]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2323[i + 0]) );
  }
  i2320.entryTransitions = i2322
  var i2325 = i2321[3]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2325[i + 0]) );
  }
  i2320.anyStateTransitions = i2324
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2329 = data
  i2328.destinationStateNameHash = i2329[0]
  i2328.destinationStateMachineId = i2329[1]
  i2328.isExit = !!i2329[2]
  i2328.mute = !!i2329[3]
  i2328.solo = !!i2329[4]
  var i2331 = i2329[5]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2331[i + 0]) );
  }
  i2328.conditions = i2330
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2335 = data
  i2334.defaultBool = !!i2335[0]
  i2334.defaultFloat = i2335[1]
  i2334.defaultInt = i2335[2]
  i2334.name = i2335[3]
  i2334.nameHash = i2335[4]
  i2334.type = i2335[5]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2337 = data
  i2336.name = i2337[0]
  i2336.bytes64 = i2337[1]
  i2336.data = i2337[2]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2339 = data
  var i2341 = i2339[0]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2341[i + 0]) );
  }
  i2338.files = i2340
  i2338.componentToPrefabIds = i2339[1]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2345 = data
  i2344.path = i2345[0]
  request.r(i2345[1], i2345[2], 0, i2344, 'unityObject')
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2347 = data
  var i2349 = i2347[0]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2349[i + 0]) );
  }
  i2346.scriptsExecutionOrder = i2348
  var i2351 = i2347[1]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2351[i + 0]) );
  }
  i2346.sortingLayers = i2350
  var i2353 = i2347[2]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2353[i + 0]) );
  }
  i2346.cullingLayers = i2352
  i2346.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2347[3], i2346.timeSettings)
  i2346.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2347[4], i2346.physicsSettings)
  i2346.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2347[5], i2346.physics2DSettings)
  i2346.removeShadows = !!i2347[6]
  i2346.autoInstantiatePrefabs = !!i2347[7]
  i2346.enableAutoInstancing = !!i2347[8]
  i2346.lightmapEncodingQuality = i2347[9]
  i2346.desiredColorSpace = i2347[10]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2357 = data
  i2356.name = i2357[0]
  i2356.value = i2357[1]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2361 = data
  i2360.id = i2361[0]
  i2360.name = i2361[1]
  i2360.value = i2361[2]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2365 = data
  i2364.id = i2365[0]
  i2364.name = i2365[1]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2367 = data
  i2366.fixedDeltaTime = i2367[0]
  i2366.maximumDeltaTime = i2367[1]
  i2366.timeScale = i2367[2]
  i2366.maximumParticleTimestep = i2367[3]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2369 = data
  i2368.gravity = new pc.Vec3( i2369[0], i2369[1], i2369[2] )
  i2368.defaultSolverIterations = i2369[3]
  i2368.bounceThreshold = i2369[4]
  i2368.autoSyncTransforms = !!i2369[5]
  i2368.autoSimulation = !!i2369[6]
  var i2371 = i2369[7]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2371[i + 0]) );
  }
  i2368.collisionMatrix = i2370
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2375 = data
  i2374.enabled = !!i2375[0]
  i2374.layerId = i2375[1]
  i2374.otherLayerId = i2375[2]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2377 = data
  request.r(i2377[0], i2377[1], 0, i2376, 'material')
  i2376.gravity = new pc.Vec2( i2377[2], i2377[3] )
  i2376.positionIterations = i2377[4]
  i2376.velocityIterations = i2377[5]
  i2376.velocityThreshold = i2377[6]
  i2376.maxLinearCorrection = i2377[7]
  i2376.maxAngularCorrection = i2377[8]
  i2376.maxTranslationSpeed = i2377[9]
  i2376.maxRotationSpeed = i2377[10]
  i2376.timeToSleep = i2377[11]
  i2376.linearSleepTolerance = i2377[12]
  i2376.angularSleepTolerance = i2377[13]
  i2376.defaultContactOffset = i2377[14]
  i2376.autoSimulation = !!i2377[15]
  i2376.queriesHitTriggers = !!i2377[16]
  i2376.queriesStartInColliders = !!i2377[17]
  i2376.callbacksOnDisable = !!i2377[18]
  i2376.reuseCollisionCallbacks = !!i2377[19]
  i2376.autoSyncTransforms = !!i2377[20]
  var i2379 = i2377[21]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2379[i + 0]) );
  }
  i2376.collisionMatrix = i2378
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.layerId = i2383[1]
  i2382.otherLayerId = i2383[2]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2387 = data
  i2386.weight = i2387[0]
  i2386.vertices = i2387[1]
  i2386.normals = i2387[2]
  i2386.tangents = i2387[3]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2391 = data
  i2390.mode = i2391[0]
  i2390.parameter = i2391[1]
  i2390.threshold = i2391[2]
  return i2390
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[51],"96":[57],"97":[34],"98":[34],"99":[34],"100":[34],"101":[34],"102":[34],"103":[34],"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[105],"112":[105],"113":[105],"114":[105],"115":[105],"116":[105],"117":[105],"118":[57],"119":[10],"120":[121],"122":[121],"78":[18],"13":[15],"123":[18],"83":[33],"37":[35],"36":[45],"38":[35],"124":[125],"126":[18],"127":[24,18],"80":[78],"23":[24,18],"128":[18],"79":[78],"129":[18],"130":[18],"84":[18],"131":[18],"27":[18],"132":[18],"133":[18],"134":[18],"135":[24,18],"136":[24,18],"137":[18],"138":[18],"139":[18],"20":[18],"22":[24,18],"140":[18],"141":[76],"142":[76],"77":[76],"143":[76],"144":[57],"145":[57],"146":[18],"147":[24,18],"148":[10],"149":[24,18],"150":[24,18],"151":[10,24,18],"152":[18,24],"153":[18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","UnselectedColliderDrawer","WheatPieceDestroyer","WheatPieceRandomizer","DisableIfTooFar","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","DamagingObstacle","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","LootableItem","LightPole","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Slider","WheatSliderWidget","UnityEngine.UI.Text","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.LayoutElement","HealthBar","ShieldBar","UnityEngine.GameObject","UIActiveBoost","ShootButtonCtrl","UnityEngine.UI.Button","UnityEngine.Rigidbody","CarController","WheelEffects","CarUserControl","UnityStandardAssets.Vehicles.Car.CarAudio","UnityEngine.BoxCollider","RaceCar","HealthController","Gun","JustWheelMeshes","BlobShadowMovement","UnityEngine.AudioSource","Rocket","Explosion","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DriverDescription","UnityEngine.SkinnedMeshRenderer","TrackHandles","PathCreation.PathCreator","UnityEngine.MeshCollider","FinishTrigger","GameManager","UnityEngine.Camera","Countdown","UnityEngine.CanvasGroup","LongTapButton","TrackContentGenerator","WheatGenerator","RoadGenerator","GhostReader","LunaUIFields","Localization","UnityEngine.TextAsset","Products","Boosts","GhostWriter","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","WinScreenWidget","EndGameButton","UnityEngine.UI.HorizontalLayoutGroup","BoostsPanelCtrl","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ButtonInput","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

