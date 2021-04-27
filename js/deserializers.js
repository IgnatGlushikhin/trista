var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.JointSpring' )
  var i1801 = data
  i1800.spring = i1801[0]
  i1800.damper = i1801[1]
  i1800.targetPosition = i1801[2]
  return i1800
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.JointMotor' )
  var i1803 = data
  i1802.m_TargetVelocity = i1803[0]
  i1802.m_Force = i1803[1]
  i1802.m_FreeSpin = i1803[2]
  return i1802
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.JointLimits' )
  var i1805 = data
  i1804.m_Min = i1805[0]
  i1804.m_Max = i1805[1]
  i1804.m_Bounciness = i1805[2]
  i1804.m_BounceMinVelocity = i1805[3]
  i1804.m_ContactDistance = i1805[4]
  i1804.minBounce = i1805[5]
  i1804.maxBounce = i1805[6]
  return i1804
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.JointDrive' )
  var i1807 = data
  i1806.m_PositionSpring = i1807[0]
  i1806.m_PositionDamper = i1807[1]
  i1806.m_MaximumForce = i1807[2]
  return i1806
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1809 = data
  i1808.m_Spring = i1809[0]
  i1808.m_Damper = i1809[1]
  return i1808
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1811 = data
  i1810.m_Limit = i1811[0]
  i1810.m_Bounciness = i1811[1]
  i1810.m_ContactDistance = i1811[2]
  return i1810
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1813 = data
  i1812.m_ExtremumSlip = i1813[0]
  i1812.m_ExtremumValue = i1813[1]
  i1812.m_AsymptoteSlip = i1813[2]
  i1812.m_AsymptoteValue = i1813[3]
  i1812.m_Stiffness = i1813[4]
  return i1812
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1815 = data
  i1814.m_LowerAngle = i1815[0]
  i1814.m_UpperAngle = i1815[1]
  return i1814
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1817 = data
  i1816.m_MotorSpeed = i1817[0]
  i1816.m_MaximumMotorTorque = i1817[1]
  return i1816
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1818 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1819 = data
  i1818.m_DampingRatio = i1819[0]
  i1818.m_Frequency = i1819[1]
  i1818.m_Angle = i1819[2]
  return i1818
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1820 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1821 = data
  i1820.m_LowerTranslation = i1821[0]
  i1820.m_UpperTranslation = i1821[1]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1822 = root || new pc.UnityMaterial()
  var i1823 = data
  i1822.name = i1823[0]
  request.r(i1823[1], i1823[2], 0, i1822, 'shader')
  i1822.renderQueue = i1823[3]
  i1822.enableInstancing = !!i1823[4]
  var i1825 = i1823[5]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1825[i + 0]) );
  }
  i1822.floatParameters = i1824
  var i1827 = i1823[6]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1827[i + 0]) );
  }
  i1822.colorParameters = i1826
  var i1829 = i1823[7]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1829[i + 0]) );
  }
  i1822.vectorParameters = i1828
  var i1831 = i1823[8]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1831[i + 0]) );
  }
  i1822.textureParameters = i1830
  var i1833 = i1823[9]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1833[i + 0]) );
  }
  i1822.materialFlags = i1832
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1837 = data
  i1836.name = i1837[0]
  i1836.value = i1837[1]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1841 = data
  i1840.name = i1841[0]
  i1840.value = new pc.Color(i1841[1], i1841[2], i1841[3], i1841[4])
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1845 = data
  i1844.name = i1845[0]
  i1844.value = new pc.Vec4( i1845[1], i1845[2], i1845[3], i1845[4] )
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1849 = data
  i1848.name = i1849[0]
  request.r(i1849[1], i1849[2], 0, i1848, 'value')
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1853 = data
  i1852.name = i1853[0]
  i1852.enabled = !!i1853[1]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1855 = data
  i1854.position = new pc.Vec3( i1855[0], i1855[1], i1855[2] )
  i1854.scale = new pc.Vec3( i1855[3], i1855[4], i1855[5] )
  i1854.rotation = new pc.Quat(i1855[6], i1855[7], i1855[8], i1855[9])
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1857 = data
  i1856.enabled = !!i1857[0]
  i1856.isTrigger = !!i1857[1]
  request.r(i1857[2], i1857[3], 0, i1856, 'material')
  i1856.center = new pc.Vec3( i1857[4], i1857[5], i1857[6] )
  i1856.radius = i1857[7]
  return i1856
}

Deserializers["UnselectedColliderDrawer"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnselectedColliderDrawer' )
  var i1859 = data
  return i1858
}

Deserializers["WheatPieceDestroyer"] = function (request, data, root) {
  var i1860 = root || request.c( 'WheatPieceDestroyer' )
  var i1861 = data
  return i1860
}

Deserializers["WheatPieceRandomizer"] = function (request, data, root) {
  var i1862 = root || request.c( 'WheatPieceRandomizer' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, 'partsParent')
  return i1862
}

Deserializers["DisableIfTooFar"] = function (request, data, root) {
  var i1864 = root || request.c( 'DisableIfTooFar' )
  var i1865 = data
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'sharedMesh')
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'additionalVertexStreams')
  i1868.enabled = !!i1869[2]
  request.r(i1869[3], i1869[4], 0, i1868, 'sharedMaterial')
  var i1871 = i1869[5]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 2) {
  request.r(i1871[i + 0], i1871[i + 1], 2, i1870, '')
  }
  i1868.sharedMaterials = i1870
  i1868.receiveShadows = !!i1869[6]
  i1868.shadowCastingMode = i1869[7]
  i1868.sortingLayerID = i1869[8]
  i1868.sortingOrder = i1869[9]
  i1868.lightmapIndex = i1869[10]
  i1868.lightmapSceneIndex = i1869[11]
  i1868.lightmapScaleOffset = new pc.Vec4( i1869[12], i1869[13], i1869[14], i1869[15] )
  i1868.lightProbeUsage = i1869[16]
  i1868.reflectionProbeUsage = i1869[17]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1875 = data
  i1874.name = i1875[0]
  i1874.tag = i1875[1]
  i1874.enabled = !!i1875[2]
  i1874.isStatic = !!i1875[3]
  i1874.layer = i1875[4]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1877 = data
  i1876.name = i1877[0]
  i1876.halfPrecision = !!i1877[1]
  i1876.vertexCount = i1877[2]
  i1876.aabb = i1877[3]
  var i1879 = i1877[4]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( !!i1879[i + 0] );
  }
  i1876.streams = i1878
  i1876.vertices = i1877[5]
  var i1881 = i1877[6]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1881[i + 0]) );
  }
  i1876.subMeshes = i1880
  var i1883 = i1877[7]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 16) {
    i1882.push( new pc.Mat4().setData(i1883[i + 0], i1883[i + 1], i1883[i + 2], i1883[i + 3],  i1883[i + 4], i1883[i + 5], i1883[i + 6], i1883[i + 7],  i1883[i + 8], i1883[i + 9], i1883[i + 10], i1883[i + 11],  i1883[i + 12], i1883[i + 13], i1883[i + 14], i1883[i + 15]) );
  }
  i1876.bindposes = i1882
  var i1885 = i1877[8]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1885[i + 0]) );
  }
  i1876.blendShapes = i1884
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1891 = data
  i1890.triangles = i1891[0]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1897 = data
  i1896.name = i1897[0]
  var i1899 = i1897[1]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1899[i + 0]) );
  }
  i1896.frames = i1898
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1901 = data
  i1900.name = i1901[0]
  i1900.width = i1901[1]
  i1900.height = i1901[2]
  i1900.mipmapCount = i1901[3]
  i1900.anisoLevel = i1901[4]
  i1900.filterMode = i1901[5]
  i1900.hdr = !!i1901[6]
  i1900.format = i1901[7]
  i1900.wrapMode = i1901[8]
  i1900.alphaIsTransparency = !!i1901[9]
  i1900.alphaSource = i1901[10]
  return i1900
}

Deserializers["DamagingObstacle"] = function (request, data, root) {
  var i1902 = root || request.c( 'DamagingObstacle' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'parts')
  i1902.m_damage = i1903[2]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1905 = data
  i1904.enabled = !!i1905[0]
  request.r(i1905[1], i1905[2], 0, i1904, 'sharedMaterial')
  var i1907 = i1905[3]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 2) {
  request.r(i1907[i + 0], i1907[i + 1], 2, i1906, '')
  }
  i1904.sharedMaterials = i1906
  i1904.receiveShadows = !!i1905[4]
  i1904.shadowCastingMode = i1905[5]
  i1904.sortingLayerID = i1905[6]
  i1904.sortingOrder = i1905[7]
  i1904.lightmapIndex = i1905[8]
  i1904.lightmapSceneIndex = i1905[9]
  i1904.lightmapScaleOffset = new pc.Vec4( i1905[10], i1905[11], i1905[12], i1905[13] )
  i1904.lightProbeUsage = i1905[14]
  i1904.reflectionProbeUsage = i1905[15]
  request.r(i1905[16], i1905[17], 0, i1904, 'mesh')
  i1904.meshCount = i1905[18]
  i1904.activeVertexStreamsCount = i1905[19]
  i1904.alignment = i1905[20]
  i1904.renderMode = i1905[21]
  i1904.sortMode = i1905[22]
  i1904.lengthScale = i1905[23]
  i1904.velocityScale = i1905[24]
  i1904.cameraVelocityScale = i1905[25]
  i1904.normalDirection = i1905[26]
  i1904.sortingFudge = i1905[27]
  i1904.minParticleSize = i1905[28]
  i1904.maxParticleSize = i1905[29]
  i1904.pivot = new pc.Vec3( i1905[30], i1905[31], i1905[32] )
  request.r(i1905[33], i1905[34], 0, i1904, 'trailMaterial')
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1909 = data
  i1908.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1909[0], i1908.main)
  i1908.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1909[1], i1908.colorBySpeed)
  i1908.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1909[2], i1908.colorOverLifetime)
  i1908.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1909[3], i1908.emission)
  i1908.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1909[4], i1908.rotationBySpeed)
  i1908.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1909[5], i1908.rotationOverLifetime)
  i1908.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1909[6], i1908.shape)
  i1908.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1909[7], i1908.sizeBySpeed)
  i1908.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1909[8], i1908.sizeOverLifetime)
  i1908.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1909[9], i1908.textureSheetAnimation)
  i1908.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1909[10], i1908.velocityOverLifetime)
  i1908.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1909[11], i1908.noise)
  i1908.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1909[12], i1908.inheritVelocity)
  i1908.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1909[13], i1908.forceOverLifetime)
  i1908.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1909[14], i1908.limitVelocityOverLifetime)
  i1908.useAutoRandomSeed = !!i1909[15]
  i1908.randomSeed = i1909[16]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1910 = root || new pc.ParticleSystemMain()
  var i1911 = data
  i1910.duration = i1911[0]
  i1910.loop = !!i1911[1]
  i1910.prewarm = !!i1911[2]
  i1910.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[3], i1910.startDelay)
  i1910.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[4], i1910.startLifetime)
  i1910.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[5], i1910.startSpeed)
  i1910.startSize3D = !!i1911[6]
  i1910.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[7], i1910.startSizeX)
  i1910.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[8], i1910.startSizeY)
  i1910.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[9], i1910.startSizeZ)
  i1910.startRotation3D = !!i1911[10]
  i1910.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[11], i1910.startRotationX)
  i1910.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[12], i1910.startRotationY)
  i1910.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[13], i1910.startRotationZ)
  i1910.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1911[14], i1910.startColor)
  i1910.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[15], i1910.gravityModifier)
  i1910.simulationSpace = i1911[16]
  request.r(i1911[17], i1911[18], 0, i1910, 'customSimulationSpace')
  i1910.simulationSpeed = i1911[19]
  i1910.useUnscaledTime = !!i1911[20]
  i1910.scalingMode = i1911[21]
  i1910.playOnAwake = !!i1911[22]
  i1910.maxParticles = i1911[23]
  i1910.emitterVelocityMode = i1911[24]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1912 = root || new pc.MinMaxCurve()
  var i1913 = data
  i1912.mode = i1913[0]
  i1912.curveMin = new pc.AnimationCurve( { keys_flow: i1913[1] } )
  i1912.curveMax = new pc.AnimationCurve( { keys_flow: i1913[2] } )
  i1912.curveMultiplier = i1913[3]
  i1912.constantMin = i1913[4]
  i1912.constantMax = i1913[5]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1914 = root || new pc.MinMaxGradient()
  var i1915 = data
  i1914.mode = i1915[0]
  i1914.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1915[1], i1914.gradientMin)
  i1914.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1915[2], i1914.gradientMax)
  i1914.colorMin = new pc.Color(i1915[3], i1915[4], i1915[5], i1915[6])
  i1914.colorMax = new pc.Color(i1915[7], i1915[8], i1915[9], i1915[10])
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1917 = data
  i1916.mode = i1917[0]
  var i1919 = i1917[1]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1919[i + 0]) );
  }
  i1916.colorKeys = i1918
  var i1921 = i1917[2]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1921[i + 0]) );
  }
  i1916.alphaKeys = i1920
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1922 = root || new pc.ParticleSystemColorBySpeed()
  var i1923 = data
  i1922.enabled = !!i1923[0]
  i1922.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1923[1], i1922.color)
  i1922.range = new pc.Vec2( i1923[2], i1923[3] )
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1927 = data
  i1926.color = new pc.Color(i1927[0], i1927[1], i1927[2], i1927[3])
  i1926.time = i1927[4]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1931 = data
  i1930.alpha = i1931[0]
  i1930.time = i1931[1]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1932 = root || new pc.ParticleSystemColorOverLifetime()
  var i1933 = data
  i1932.enabled = !!i1933[0]
  i1932.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1933[1], i1932.color)
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1934 = root || new pc.ParticleSystemEmitter()
  var i1935 = data
  i1934.enabled = !!i1935[0]
  i1934.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[1], i1934.rateOverTime)
  i1934.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[2], i1934.rateOverDistance)
  var i1937 = i1935[3]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1937[i + 0]) );
  }
  i1934.bursts = i1936
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1940 = root || new pc.ParticleSystemBurst()
  var i1941 = data
  i1940.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[0], i1940.count)
  i1940.cycleCount = i1941[1]
  i1940.minCount = i1941[2]
  i1940.maxCount = i1941[3]
  i1940.repeatInterval = i1941[4]
  i1940.time = i1941[5]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1942 = root || new pc.ParticleSystemRotationBySpeed()
  var i1943 = data
  i1942.enabled = !!i1943[0]
  i1942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[1], i1942.x)
  i1942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[2], i1942.y)
  i1942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[3], i1942.z)
  i1942.separateAxes = !!i1943[4]
  i1942.range = new pc.Vec2( i1943[5], i1943[6] )
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1944 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1945 = data
  i1944.enabled = !!i1945[0]
  i1944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[1], i1944.x)
  i1944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[2], i1944.y)
  i1944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[3], i1944.z)
  i1944.separateAxes = !!i1945[4]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1946 = root || new pc.ParticleSystemShape()
  var i1947 = data
  i1946.enabled = !!i1947[0]
  i1946.shapeType = i1947[1]
  i1946.randomDirectionAmount = i1947[2]
  i1946.sphericalDirectionAmount = i1947[3]
  i1946.randomPositionAmount = i1947[4]
  i1946.alignToDirection = !!i1947[5]
  i1946.radius = i1947[6]
  i1946.radiusMode = i1947[7]
  i1946.radiusSpread = i1947[8]
  i1946.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[9], i1946.radiusSpeed)
  i1946.radiusThickness = i1947[10]
  i1946.angle = i1947[11]
  i1946.length = i1947[12]
  i1946.boxThickness = new pc.Vec3( i1947[13], i1947[14], i1947[15] )
  i1946.meshShapeType = i1947[16]
  request.r(i1947[17], i1947[18], 0, i1946, 'mesh')
  request.r(i1947[19], i1947[20], 0, i1946, 'meshRenderer')
  request.r(i1947[21], i1947[22], 0, i1946, 'skinnedMeshRenderer')
  i1946.useMeshMaterialIndex = !!i1947[23]
  i1946.meshMaterialIndex = i1947[24]
  i1946.useMeshColors = !!i1947[25]
  i1946.normalOffset = i1947[26]
  i1946.arc = i1947[27]
  i1946.arcMode = i1947[28]
  i1946.arcSpread = i1947[29]
  i1946.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[30], i1946.arcSpeed)
  i1946.donutRadius = i1947[31]
  i1946.position = new pc.Vec3( i1947[32], i1947[33], i1947[34] )
  i1946.rotation = new pc.Vec3( i1947[35], i1947[36], i1947[37] )
  i1946.scale = new pc.Vec3( i1947[38], i1947[39], i1947[40] )
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1948 = root || new pc.ParticleSystemSizeBySpeed()
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[1], i1948.x)
  i1948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[2], i1948.y)
  i1948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[3], i1948.z)
  i1948.separateAxes = !!i1949[4]
  i1948.range = new pc.Vec2( i1949[5], i1949[6] )
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1950 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1951 = data
  i1950.enabled = !!i1951[0]
  i1950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[1], i1950.x)
  i1950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[2], i1950.y)
  i1950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[3], i1950.z)
  i1950.separateAxes = !!i1951[4]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1952 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1953 = data
  i1952.enabled = !!i1953[0]
  i1952.mode = i1953[1]
  i1952.animation = i1953[2]
  i1952.numTilesX = i1953[3]
  i1952.numTilesY = i1953[4]
  i1952.useRandomRow = !!i1953[5]
  i1952.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[6], i1952.frameOverTime)
  i1952.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[7], i1952.startFrame)
  i1952.cycleCount = i1953[8]
  i1952.rowIndex = i1953[9]
  i1952.flipU = i1953[10]
  i1952.flipV = i1953[11]
  i1952.spriteCount = i1953[12]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1954 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1955 = data
  i1954.enabled = !!i1955[0]
  i1954.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[1], i1954.x)
  i1954.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[2], i1954.y)
  i1954.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[3], i1954.z)
  i1954.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[4], i1954.speedModifier)
  i1954.space = i1955[5]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1956 = root || new pc.ParticleSystemNoise()
  var i1957 = data
  i1956.enabled = !!i1957[0]
  i1956.separateAxes = !!i1957[1]
  i1956.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[2], i1956.strengthX)
  i1956.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[3], i1956.strengthY)
  i1956.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[4], i1956.strengthZ)
  i1956.frequency = i1957[5]
  i1956.damping = !!i1957[6]
  i1956.octaveCount = i1957[7]
  i1956.octaveMultiplier = i1957[8]
  i1956.octaveScale = i1957[9]
  i1956.quality = i1957[10]
  i1956.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[11], i1956.scrollSpeed)
  i1956.scrollSpeedMultiplier = i1957[12]
  i1956.remapEnabled = !!i1957[13]
  i1956.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[14], i1956.remapX)
  i1956.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[15], i1956.remapY)
  i1956.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[16], i1956.remapZ)
  i1956.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[17], i1956.positionAmount)
  i1956.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[18], i1956.rotationAmount)
  i1956.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[19], i1956.sizeAmount)
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1958 = root || new pc.ParticleSystemInheritVelocity()
  var i1959 = data
  i1958.enabled = !!i1959[0]
  i1958.mode = i1959[1]
  i1958.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[2], i1958.curve)
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1960 = root || new pc.ParticleSystemForceOverLifetime()
  var i1961 = data
  i1960.enabled = !!i1961[0]
  i1960.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[1], i1960.x)
  i1960.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[2], i1960.y)
  i1960.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[3], i1960.z)
  i1960.space = i1961[4]
  i1960.randomized = !!i1961[5]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1962 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1963 = data
  i1962.enabled = !!i1963[0]
  i1962.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[1], i1962.limitX)
  i1962.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[2], i1962.limitY)
  i1962.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[3], i1962.limitZ)
  i1962.dampen = i1963[4]
  i1962.separateAxes = !!i1963[5]
  i1962.space = i1963[6]
  i1962.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[7], i1962.drag)
  i1962.multiplyDragByParticleSize = !!i1963[8]
  i1962.multiplyDragByParticleVelocity = !!i1963[9]
  return i1962
}

Deserializers["LootableItem"] = function (request, data, root) {
  var i1964 = root || request.c( 'LootableItem' )
  var i1965 = data
  i1964.OnLootableItemCollected = request.d('LootableItemEvent', i1965[0], i1964.OnLootableItemCollected)
  request.r(i1965[1], i1965[2], 0, i1964, 'item')
  i1964.kind = i1965[3]
  return i1964
}

Deserializers["LootableItemEvent"] = function (request, data, root) {
  var i1966 = root || request.c( 'LootableItemEvent' )
  var i1967 = data
  i1966.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1967[0], i1966.m_PersistentCalls)
  return i1966
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1969 = data
  var i1971 = i1969[0]
  var i1970 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.add(request.d('UnityEngine.Events.PersistentCall', i1971[i + 0]));
  }
  i1968.m_Calls = i1970
  return i1968
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1975 = data
  request.r(i1975[0], i1975[1], 0, i1974, 'm_Target')
  i1974.m_MethodName = i1975[2]
  i1974.m_Mode = i1975[3]
  i1974.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1975[4], i1974.m_Arguments)
  i1974.m_CallState = i1975[5]
  return i1974
}

Deserializers["LightPole"] = function (request, data, root) {
  var i1976 = root || request.c( 'LightPole' )
  var i1977 = data
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1979 = data
  i1978.pivot = new pc.Vec2( i1979[0], i1979[1] )
  i1978.anchorMin = new pc.Vec2( i1979[2], i1979[3] )
  i1978.anchorMax = new pc.Vec2( i1979[4], i1979[5] )
  i1978.sizeDelta = new pc.Vec2( i1979[6], i1979[7] )
  i1978.anchoredPosition3D = new pc.Vec3( i1979[8], i1979[9], i1979[10] )
  i1978.rotation = new pc.Quat(i1979[11], i1979[12], i1979[13], i1979[14])
  i1978.scale = new pc.Vec3( i1979[15], i1979[16], i1979[17] )
  return i1978
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1981 = data
  request.r(i1981[0], i1981[1], 0, i1980, 'm_FillRect')
  request.r(i1981[2], i1981[3], 0, i1980, 'm_HandleRect')
  i1980.m_Direction = i1981[4]
  i1980.m_MinValue = i1981[5]
  i1980.m_MaxValue = i1981[6]
  i1980.m_WholeNumbers = !!i1981[7]
  i1980.m_Value = i1981[8]
  i1980.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1981[9], i1980.m_OnValueChanged)
  i1980.m_Navigation = request.d('UnityEngine.UI.Navigation', i1981[10], i1980.m_Navigation)
  i1980.m_Transition = i1981[11]
  i1980.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1981[12], i1980.m_Colors)
  i1980.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1981[13], i1980.m_SpriteState)
  i1980.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1981[14], i1980.m_AnimationTriggers)
  i1980.m_Interactable = !!i1981[15]
  request.r(i1981[16], i1981[17], 0, i1980, 'm_TargetGraphic')
  return i1980
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1983 = data
  i1982.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1983[0], i1982.m_PersistentCalls)
  return i1982
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1985 = data
  i1984.m_Mode = i1985[0]
  request.r(i1985[1], i1985[2], 0, i1984, 'm_SelectOnUp')
  request.r(i1985[3], i1985[4], 0, i1984, 'm_SelectOnDown')
  request.r(i1985[5], i1985[6], 0, i1984, 'm_SelectOnLeft')
  request.r(i1985[7], i1985[8], 0, i1984, 'm_SelectOnRight')
  return i1984
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1987 = data
  i1986.m_NormalColor = new pc.Color(i1987[0], i1987[1], i1987[2], i1987[3])
  i1986.m_HighlightedColor = new pc.Color(i1987[4], i1987[5], i1987[6], i1987[7])
  i1986.m_PressedColor = new pc.Color(i1987[8], i1987[9], i1987[10], i1987[11])
  i1986.m_SelectedColor = new pc.Color(i1987[12], i1987[13], i1987[14], i1987[15])
  i1986.m_DisabledColor = new pc.Color(i1987[16], i1987[17], i1987[18], i1987[19])
  i1986.m_ColorMultiplier = i1987[20]
  i1986.m_FadeDuration = i1987[21]
  return i1986
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1989 = data
  request.r(i1989[0], i1989[1], 0, i1988, 'm_HighlightedSprite')
  request.r(i1989[2], i1989[3], 0, i1988, 'm_PressedSprite')
  request.r(i1989[4], i1989[5], 0, i1988, 'm_SelectedSprite')
  request.r(i1989[6], i1989[7], 0, i1988, 'm_DisabledSprite')
  return i1988
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1991 = data
  i1990.m_NormalTrigger = i1991[0]
  i1990.m_HighlightedTrigger = i1991[1]
  i1990.m_PressedTrigger = i1991[2]
  i1990.m_SelectedTrigger = i1991[3]
  i1990.m_DisabledTrigger = i1991[4]
  return i1990
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i1992 = root || request.c( 'WheatSliderWidget' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'amountText')
  request.r(i1993[2], i1993[3], 0, i1992, 'BarIconImage')
  request.r(i1993[4], i1993[5], 0, i1992, 'WheatImage')
  request.r(i1993[6], i1993[7], 0, i1992, 'products')
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1995 = data
  i1994.cullTransparentMesh = !!i1995[0]
  return i1994
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.UI.Text' )
  var i1997 = data
  i1996.m_FontData = request.d('UnityEngine.UI.FontData', i1997[0], i1996.m_FontData)
  i1996.m_Text = i1997[1]
  request.r(i1997[2], i1997[3], 0, i1996, 'm_Material')
  i1996.m_Maskable = !!i1997[4]
  i1996.m_Color = new pc.Color(i1997[5], i1997[6], i1997[7], i1997[8])
  i1996.m_RaycastTarget = !!i1997[9]
  return i1996
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1999 = data
  request.r(i1999[0], i1999[1], 0, i1998, 'm_Font')
  i1998.m_FontSize = i1999[2]
  i1998.m_FontStyle = i1999[3]
  i1998.m_BestFit = !!i1999[4]
  i1998.m_MinSize = i1999[5]
  i1998.m_MaxSize = i1999[6]
  i1998.m_Alignment = i1999[7]
  i1998.m_AlignByGeometry = !!i1999[8]
  i1998.m_RichText = !!i1999[9]
  i1998.m_HorizontalOverflow = i1999[10]
  i1998.m_VerticalOverflow = i1999[11]
  i1998.m_LineSpacing = i1999[12]
  return i1998
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2000 = root || request.c( 'UnityEngine.UI.Image' )
  var i2001 = data
  request.r(i2001[0], i2001[1], 0, i2000, 'm_Sprite')
  i2000.m_Type = i2001[2]
  i2000.m_PreserveAspect = !!i2001[3]
  i2000.m_FillCenter = !!i2001[4]
  i2000.m_FillMethod = i2001[5]
  i2000.m_FillAmount = i2001[6]
  i2000.m_FillClockwise = !!i2001[7]
  i2000.m_FillOrigin = i2001[8]
  i2000.m_UseSpriteMesh = !!i2001[9]
  i2000.m_PixelsPerUnitMultiplier = i2001[10]
  request.r(i2001[11], i2001[12], 0, i2000, 'm_Material')
  i2000.m_Maskable = !!i2001[13]
  i2000.m_Color = new pc.Color(i2001[14], i2001[15], i2001[16], i2001[17])
  i2000.m_RaycastTarget = !!i2001[18]
  return i2000
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2002 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2003 = data
  i2002.m_IgnoreLayout = !!i2003[0]
  i2002.m_MinWidth = i2003[1]
  i2002.m_MinHeight = i2003[2]
  i2002.m_PreferredWidth = i2003[3]
  i2002.m_PreferredHeight = i2003[4]
  i2002.m_FlexibleWidth = i2003[5]
  i2002.m_FlexibleHeight = i2003[6]
  i2002.m_LayoutPriority = i2003[7]
  return i2002
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i2004 = root || request.c( 'HealthBar' )
  var i2005 = data
  request.r(i2005[0], i2005[1], 0, i2004, 'HealthProvider')
  request.r(i2005[2], i2005[3], 0, i2004, 'progressImage')
  request.r(i2005[4], i2005[5], 0, i2004, 'BarIconImage')
  return i2004
}

Deserializers["ShieldBar"] = function (request, data, root) {
  var i2006 = root || request.c( 'ShieldBar' )
  var i2007 = data
  request.r(i2007[0], i2007[1], 0, i2006, 'progressImage')
  request.r(i2007[2], i2007[3], 0, i2006, 'barIconImage')
  request.r(i2007[4], i2007[5], 0, i2006, 'root')
  return i2006
}

Deserializers["UIActiveBoost"] = function (request, data, root) {
  var i2008 = root || request.c( 'UIActiveBoost' )
  var i2009 = data
  request.r(i2009[0], i2009[1], 0, i2008, 'imgIcon')
  request.r(i2009[2], i2009[3], 0, i2008, 'timerImg')
  var i2011 = i2009[4]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('UIActiveBoost+SpriteByKind', i2011[i + 0]) );
  }
  i2008.sprites = i2010
  i2008.Kind = i2009[5]
  return i2008
}

Deserializers["UIActiveBoost+SpriteByKind"] = function (request, data, root) {
  var i2014 = root || request.c( 'UIActiveBoost+SpriteByKind' )
  var i2015 = data
  i2014.Kind = i2015[0]
  request.r(i2015[1], i2015[2], 0, i2014, 'Sprite')
  return i2014
}

Deserializers["ShootButtonCtrl"] = function (request, data, root) {
  var i2016 = root || request.c( 'ShootButtonCtrl' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'txtAmount')
  request.r(i2017[2], i2017[3], 0, i2016, 'timerImg')
  request.r(i2017[4], i2017[5], 0, i2016, 'products')
  return i2016
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.UI.Button' )
  var i2019 = data
  i2018.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2019[0], i2018.m_OnClick)
  i2018.m_Navigation = request.d('UnityEngine.UI.Navigation', i2019[1], i2018.m_Navigation)
  i2018.m_Transition = i2019[2]
  i2018.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2019[3], i2018.m_Colors)
  i2018.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2019[4], i2018.m_SpriteState)
  i2018.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2019[5], i2018.m_AnimationTriggers)
  i2018.m_Interactable = !!i2019[6]
  request.r(i2019[7], i2019[8], 0, i2018, 'm_TargetGraphic')
  return i2018
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2021 = data
  i2020.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2021[0], i2020.m_PersistentCalls)
  return i2020
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2023 = data
  request.r(i2023[0], i2023[1], 0, i2022, 'm_ObjectArgument')
  i2022.m_ObjectArgumentAssemblyTypeName = i2023[2]
  i2022.m_IntArgument = i2023[3]
  i2022.m_FloatArgument = i2023[4]
  i2022.m_StringArgument = i2023[5]
  i2022.m_BoolArgument = !!i2023[6]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2025 = data
  i2024.mass = i2025[0]
  i2024.drag = i2025[1]
  i2024.angularDrag = i2025[2]
  i2024.useGravity = !!i2025[3]
  i2024.isKinematic = !!i2025[4]
  i2024.constraints = i2025[5]
  i2024.maxAngularVelocity = i2025[6]
  i2024.collisionDetectionMode = i2025[7]
  i2024.interpolation = i2025[8]
  return i2024
}

Deserializers["CarController"] = function (request, data, root) {
  var i2026 = root || request.c( 'CarController' )
  var i2027 = data
  var i2029 = i2027[0]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 2) {
  request.r(i2029[i + 0], i2029[i + 1], 2, i2028, '')
  }
  i2026.m_WheelColliders = i2028
  i2026.TorqueMultiplier = i2027[1]
  i2026.m_CarDriveType = i2027[2]
  var i2031 = i2027[3]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 2) {
  request.r(i2031[i + 0], i2031[i + 1], 2, i2030, '')
  }
  i2026.m_WheelMeshes = i2030
  var i2033 = i2027[4]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 2) {
  request.r(i2033[i + 0], i2033[i + 1], 2, i2032, '')
  }
  i2026.m_WheelEffects = i2032
  i2026.m_CentreOfMassOffset = new pc.Vec3( i2027[5], i2027[6], i2027[7] )
  i2026.m_MaximumSteerAngle = i2027[8]
  i2026.m_SteerHelper = i2027[9]
  i2026.m_TractionControl = i2027[10]
  i2026.m_FullTorqueOverAllWheels = i2027[11]
  i2026.m_ReverseTorque = i2027[12]
  i2026.m_MaxHandbrakeTorque = i2027[13]
  i2026.m_Downforce = i2027[14]
  i2026.m_SpeedType = i2027[15]
  i2026.m_Topspeed = i2027[16]
  i2026.m_RevRangeBoundary = i2027[17]
  i2026.m_SlipLimit = i2027[18]
  i2026.m_BrakeTorque = i2027[19]
  i2026.m_GearNum = i2027[20]
  request.r(i2027[21], i2027[22], 0, i2026, 'm_Rigidbody')
  return i2026
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i2040 = root || request.c( 'CarUserControl' )
  var i2041 = data
  i2040.CanMove = !!i2041[0]
  request.r(i2041[1], i2041[2], 0, i2040, 'pathCreator')
  request.r(i2041[3], i2041[4], 0, i2040, 'playerCarrot')
  request.r(i2041[5], i2041[6], 0, i2040, 'farPointInDirectionOfView')
  request.r(i2041[7], i2041[8], 0, i2040, 'ghostWriter')
  request.r(i2041[9], i2041[10], 0, i2040, 'carBody')
  request.r(i2041[11], i2041[12], 0, i2040, 'collisionParticlesLeft')
  request.r(i2041[13], i2041[14], 0, i2040, 'collisionParticlesRight')
  return i2040
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i2043 = data
  i2042.engineSoundStyle = i2043[0]
  request.r(i2043[1], i2043[2], 0, i2042, 'lowAccelClip')
  request.r(i2043[3], i2043[4], 0, i2042, 'lowDecelClip')
  request.r(i2043[5], i2043[6], 0, i2042, 'highAccelClip')
  request.r(i2043[7], i2043[8], 0, i2042, 'highDecelClip')
  i2042.pitchMultiplier = i2043[9]
  i2042.lowPitchMin = i2043[10]
  i2042.lowPitchMax = i2043[11]
  i2042.highPitchMultiplier = i2043[12]
  i2042.maxRolloffDistance = i2043[13]
  i2042.dopplerLevel = i2043[14]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2045 = data
  i2044.center = new pc.Vec3( i2045[0], i2045[1], i2045[2] )
  i2044.size = new pc.Vec3( i2045[3], i2045[4], i2045[5] )
  i2044.enabled = !!i2045[6]
  i2044.isTrigger = !!i2045[7]
  request.r(i2045[8], i2045[9], 0, i2044, 'material')
  return i2044
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i2046 = root || request.c( 'RaceCar' )
  var i2047 = data
  i2046.Owner = i2047[0]
  i2046.Score = i2047[1]
  request.r(i2047[2], i2047[3], 0, i2046, 'boosts')
  request.r(i2047[4], i2047[5], 0, i2046, 'products')
  request.r(i2047[6], i2047[7], 0, i2046, 'boostsEffectPosition')
  request.r(i2047[8], i2047[9], 0, i2046, 'effectSheildPrefab')
  request.r(i2047[10], i2047[11], 0, i2046, 'effectDoublePrefab')
  return i2046
}

Deserializers["HealthController"] = function (request, data, root) {
  var i2048 = root || request.c( 'HealthController' )
  var i2049 = data
  i2048.Health = i2049[0]
  i2048.MaxHealth = i2049[1]
  i2048.Shield = i2049[2]
  i2048.MaxShield = i2049[3]
  request.r(i2049[4], i2049[5], 0, i2048, 'MainScreen')
  request.r(i2049[6], i2049[7], 0, i2048, 'LossScreen')
  request.r(i2049[8], i2049[9], 0, i2048, 'boosts')
  return i2048
}

Deserializers["Gun"] = function (request, data, root) {
  var i2050 = root || request.c( 'Gun' )
  var i2051 = data
  request.r(i2051[0], i2051[1], 0, i2050, 'rocketPrefab')
  request.r(i2051[2], i2051[3], 0, i2050, 'carUserControl')
  request.r(i2051[4], i2051[5], 0, i2050, 'products')
  return i2050
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i2052 = root || request.c( 'JustWheelMeshes' )
  var i2053 = data
  var i2055 = i2053[0]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 2) {
  request.r(i2055[i + 0], i2055[i + 1], 2, i2054, '')
  }
  i2052.m_WheelMeshes = i2054
  return i2052
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i2056 = root || request.c( 'BlobShadowMovement' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'Target')
  i2056.Offset = new pc.Vec3( i2057[2], i2057[3], i2057[4] )
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2059 = data
  request.r(i2059[0], i2059[1], 0, i2058, 'clip')
  i2058.playOnAwake = !!i2059[2]
  i2058.loop = !!i2059[3]
  i2058.enabled = !!i2059[4]
  return i2058
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i2060 = root || request.c( 'WheelEffects' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, 'SkidTrailPrefab')
  request.r(i2061[2], i2061[3], 0, i2060, 'skidParticles')
  return i2060
}

Deserializers["Rocket"] = function (request, data, root) {
  var i2062 = root || request.c( 'Rocket' )
  var i2063 = data
  request.r(i2063[0], i2063[1], 0, i2062, 'jetStream')
  request.r(i2063[2], i2063[3], 0, i2062, 'explosionPrefab')
  return i2062
}

Deserializers["Explosion"] = function (request, data, root) {
  var i2064 = root || request.c( 'Explosion' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, 'explosionParticleSystem')
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2067 = data
  request.r(i2067[0], i2067[1], 0, i2066, 'animatorController')
  i2066.updateMode = i2067[2]
  var i2069 = i2067[3]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 2) {
  request.r(i2069[i + 0], i2069[i + 1], 2, i2068, '')
  }
  i2066.humanBones = i2068
  i2066.enabled = !!i2067[4]
  return i2066
}

Deserializers["DriverDescription"] = function (request, data, root) {
  var i2072 = root || request.c( 'DriverDescription' )
  var i2073 = data
  var i2075 = i2073[0]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 2) {
  request.r(i2075[i + 0], i2075[i + 1], 2, i2074, '')
  }
  i2072.driverPrefab = i2074
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2077 = data
  i2076.enabled = !!i2077[0]
  request.r(i2077[1], i2077[2], 0, i2076, 'sharedMaterial')
  var i2079 = i2077[3]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 2) {
  request.r(i2079[i + 0], i2079[i + 1], 2, i2078, '')
  }
  i2076.sharedMaterials = i2078
  i2076.receiveShadows = !!i2077[4]
  i2076.shadowCastingMode = i2077[5]
  i2076.sortingLayerID = i2077[6]
  i2076.sortingOrder = i2077[7]
  i2076.lightmapIndex = i2077[8]
  i2076.lightmapSceneIndex = i2077[9]
  i2076.lightmapScaleOffset = new pc.Vec4( i2077[10], i2077[11], i2077[12], i2077[13] )
  i2076.lightProbeUsage = i2077[14]
  i2076.reflectionProbeUsage = i2077[15]
  request.r(i2077[16], i2077[17], 0, i2076, 'sharedMesh')
  var i2081 = i2077[18]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 2) {
  request.r(i2081[i + 0], i2081[i + 1], 2, i2080, '')
  }
  i2076.bones = i2080
  i2076.updateWhenOffscreen = !!i2077[19]
  i2076.localBounds = i2077[20]
  request.r(i2077[21], i2077[22], 0, i2076, 'rootBone')
  var i2083 = i2077[23]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2083[i + 0]) );
  }
  i2076.blendShapesWeights = i2082
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2087 = data
  i2086.weight = i2087[0]
  return i2086
}

Deserializers["TrackHandles"] = function (request, data, root) {
  var i2088 = root || request.c( 'TrackHandles' )
  var i2089 = data
  request.r(i2089[0], i2089[1], 0, i2088, 'MainPath')
  i2088.OnFinishReached = request.d('UnityEngine.Events.UnityEvent', i2089[2], i2088.OnFinishReached)
  request.r(i2089[3], i2089[4], 0, i2088, 'Root')
  return i2088
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2091 = data
  i2090.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2091[0], i2090.m_PersistentCalls)
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2093 = data
  i2092.enabled = !!i2093[0]
  i2092.isTrigger = !!i2093[1]
  request.r(i2093[2], i2093[3], 0, i2092, 'material')
  request.r(i2093[4], i2093[5], 0, i2092, 'sharedMesh')
  i2092.convex = !!i2093[6]
  return i2092
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i2094 = root || request.c( 'FinishTrigger' )
  var i2095 = data
  request.r(i2095[0], i2095[1], 0, i2094, 'trackHandles')
  return i2094
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i2096 = root || request.c( 'PathCreation.PathCreator' )
  var i2097 = data
  i2096.editorData = request.d('PathCreation.PathCreatorData', i2097[0], i2096.editorData)
  i2096.initialized = !!i2097[1]
  return i2096
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i2098 = root || request.c( 'PathCreation.PathCreatorData' )
  var i2099 = data
  i2098.vertexPathMaxAngleError = i2099[0]
  i2098.vertexPathMinVertexSpacing = i2099[1]
  i2098.showTransformTool = !!i2099[2]
  i2098.showPathBounds = !!i2099[3]
  i2098.showPerSegmentBounds = !!i2099[4]
  i2098.displayAnchorPoints = !!i2099[5]
  i2098.displayControlPoints = !!i2099[6]
  i2098.bezierHandleScale = i2099[7]
  i2098.globalDisplaySettingsFoldout = !!i2099[8]
  i2098.keepConstantHandleSize = !!i2099[9]
  i2098.showNormalsInVertexMode = !!i2099[10]
  i2098.showBezierPathInVertexMode = !!i2099[11]
  i2098.showDisplayOptions = !!i2099[12]
  i2098.showPathOptions = !!i2099[13]
  i2098.showVertexPathDisplayOptions = !!i2099[14]
  i2098.showVertexPathOptions = !!i2099[15]
  i2098.showNormals = !!i2099[16]
  i2098.showNormalsHelpInfo = !!i2099[17]
  i2098.tabIndex = i2099[18]
  i2098._bezierPath = request.d('PathCreation.BezierPath', i2099[19], i2098._bezierPath)
  i2098.vertexPathUpToDate = !!i2099[20]
  return i2098
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i2100 = root || request.c( 'PathCreation.BezierPath' )
  var i2101 = data
  var i2103 = i2101[0]
  var i2102 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2103.length; i += 3) {
    i2102.add(new pc.Vec3( i2103[i + 0], i2103[i + 1], i2103[i + 2] ));
  }
  i2100.points = i2102
  i2100.isClosed = !!i2101[1]
  i2100.space = i2101[2]
  i2100.controlMode = i2101[3]
  i2100.autoControlLength = i2101[4]
  i2100.boundsUpToDate = !!i2101[5]
  var i2105 = i2101[6]
  var i2104 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.add(i2105[i + 0]);
  }
  i2100.perAnchorNormalsAngle = i2104
  i2100.globalNormalsAngle = i2101[7]
  i2100.flipNormals = !!i2101[8]
  return i2100
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2110 = root || request.c( 'GameManager' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, 'MainCamera')
  i2110.LandscapeFov = i2111[2]
  i2110.PortraitFov = i2111[3]
  i2110.WheatCullDistance = i2111[4]
  request.r(i2111[5], i2111[6], 0, i2110, 'CountdownWidget')
  request.r(i2111[7], i2111[8], 0, i2110, 'TutorialWindow')
  request.r(i2111[9], i2111[10], 0, i2110, 'MainBackroundImage')
  request.r(i2111[11], i2111[12], 0, i2110, 'WinScreen')
  request.r(i2111[13], i2111[14], 0, i2110, 'LoseScreen')
  request.r(i2111[15], i2111[16], 0, i2110, 'MainScreen')
  request.r(i2111[17], i2111[18], 0, i2110, 'btnLeft')
  request.r(i2111[19], i2111[20], 0, i2110, 'btnRight')
  request.r(i2111[21], i2111[22], 0, i2110, 'healthBar')
  var i2113 = i2111[23]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 2) {
  request.r(i2113[i + 0], i2113[i + 1], 2, i2112, '')
  }
  i2110.Opponents = i2112
  request.r(i2111[24], i2111[25], 0, i2110, 'PlayerCar')
  request.r(i2111[26], i2111[27], 0, i2110, 'CarUserControl')
  i2110.Position = i2111[28]
  request.r(i2111[29], i2111[30], 0, i2110, 'LastCheckpoint')
  request.r(i2111[31], i2111[32], 0, i2110, 'healthController')
  var i2115 = i2111[33]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 2) {
  request.r(i2115[i + 0], i2115[i + 1], 2, i2114, '')
  }
  i2110.tracktors = i2114
  var i2117 = i2111[34]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 2) {
  request.r(i2117[i + 0], i2117[i + 1], 2, i2116, '')
  }
  i2110.drivers = i2116
  var i2119 = i2111[35]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 2) {
  request.r(i2119[i + 0], i2119[i + 1], 2, i2118, '')
  }
  i2110.trackPrefabs = i2118
  request.r(i2111[36], i2111[37], 0, i2110, 'trackParent')
  i2110._WheatCullDistance = i2111[38]
  request.r(i2111[39], i2111[40], 0, i2110, 'trackContentGenerator')
  request.r(i2111[41], i2111[42], 0, i2110, 'wheatGenerator')
  request.r(i2111[43], i2111[44], 0, i2110, 'roadGenerator')
  request.r(i2111[45], i2111[46], 0, i2110, 'ghostReader')
  return i2110
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i2124 = root || request.c( 'LunaUIFields' )
  var i2125 = data
  request.r(i2125[0], i2125[1], 0, i2124, 'ObjectiveHintText')
  i2124.ObjectiveHintString = i2125[2]
  request.r(i2125[3], i2125[4], 0, i2124, 'LevelFailedButtonText')
  i2124.LevelFailedButtonString = i2125[5]
  request.r(i2125[6], i2125[7], 0, i2124, 'LevelCompleteButtonText')
  i2124.LevelCompleteButtonString = i2125[8]
  return i2124
}

Deserializers["Localization"] = function (request, data, root) {
  var i2126 = root || request.c( 'Localization' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, 'englishAsset')
  request.r(i2127[2], i2127[3], 0, i2126, 'russianAsset')
  return i2126
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i2128 = root || request.c( 'WheatGenerator' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'wheatPiece')
  request.r(i2129[2], i2129[3], 0, i2128, 'trackContentGenerator')
  request.r(i2129[4], i2129[5], 0, i2128, 'carUserControl')
  return i2128
}

Deserializers["Products"] = function (request, data, root) {
  var i2130 = root || request.c( 'Products' )
  var i2131 = data
  i2130.OnProductsNumberChanged = request.d('ProductsEvent', i2131[0], i2130.OnProductsNumberChanged)
  return i2130
}

Deserializers["ProductsEvent"] = function (request, data, root) {
  var i2132 = root || request.c( 'ProductsEvent' )
  var i2133 = data
  i2132.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2133[0], i2132.m_PersistentCalls)
  return i2132
}

Deserializers["TrackContentGenerator"] = function (request, data, root) {
  var i2134 = root || request.c( 'TrackContentGenerator' )
  var i2135 = data
  request.r(i2135[0], i2135[1], 0, i2134, 'healthController')
  var i2137 = i2135[2]
  var i2136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2137.length; i += 2) {
  request.r(i2137[i + 0], i2137[i + 1], 1, i2136, '')
  }
  i2134.AlreadyGenerated = i2136
  request.r(i2135[3], i2135[4], 0, i2134, 'parentForPlacing')
  var i2139 = i2135[5]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 2) {
  request.r(i2139[i + 0], i2139[i + 1], 2, i2138, '')
  }
  i2134.obstaclesPrefabs = i2138
  var i2141 = i2135[6]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 2) {
  request.r(i2141[i + 0], i2141[i + 1], 2, i2140, '')
  }
  i2134.hardObstaclesPrefabs = i2140
  var i2143 = i2135[7]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 2) {
  request.r(i2143[i + 0], i2143[i + 1], 2, i2142, '')
  }
  i2134.bonusesPrefabs = i2142
  request.r(i2135[8], i2135[9], 0, i2134, 'configFile')
  request.r(i2135[10], i2135[11], 0, i2134, 'products')
  request.r(i2135[12], i2135[13], 0, i2134, 'boosts')
  return i2134
}

Deserializers["Boosts"] = function (request, data, root) {
  var i2146 = root || request.c( 'Boosts' )
  var i2147 = data
  var i2149 = i2147[0]
  var i2148 = new (System.Collections.Generic.List$1(Bridge.ns('Boosts+DataItem')))
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.add(request.d('Boosts+DataItem', i2149[i + 0]));
  }
  i2146.Data = i2148
  return i2146
}

Deserializers["Boosts+DataItem"] = function (request, data, root) {
  var i2152 = root || request.c( 'Boosts+DataItem' )
  var i2153 = data
  i2152.Kind = i2153[0]
  i2152.TimeLeft = i2153[1]
  return i2152
}

Deserializers["GhostWriter"] = function (request, data, root) {
  var i2154 = root || request.c( 'GhostWriter' )
  var i2155 = data
  i2154.timer = i2155[0]
  var i2157 = i2155[1]
  var i2156 = new (System.Collections.Generic.List$1(Bridge.ns('GhostWriter+Entry')))
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.add(request.d('GhostWriter+Entry', i2157[i + 0]));
  }
  i2154.data = i2156
  request.r(i2155[2], i2155[3], 0, i2154, 'carUserControl')
  return i2154
}

Deserializers["GhostWriter+Entry"] = function (request, data, root) {
  var i2160 = root || request.c( 'GhostWriter+Entry' )
  var i2161 = data
  i2160.kind = i2161[0]
  i2160.time = i2161[1]
  i2160.distance = i2161[2]
  i2160.sideOffset = i2161[3]
  i2160.speed = i2161[4]
  return i2160
}

Deserializers["GhostReader"] = function (request, data, root) {
  var i2162 = root || request.c( 'GhostReader' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'ghost')
  request.r(i2163[2], i2163[3], 0, i2162, 'pathCreator')
  i2162.timer = i2163[4]
  var i2165 = i2163[5]
  var i2164 = new (System.Collections.Generic.List$1(Bridge.ns('GhostReader+Entry')))
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.add(request.d('GhostReader+Entry', i2165[i + 0]));
  }
  i2162.data = i2164
  return i2162
}

Deserializers["GhostReader+Entry"] = function (request, data, root) {
  var i2168 = root || request.c( 'GhostReader+Entry' )
  var i2169 = data
  i2168.kind = i2169[0]
  i2168.time = i2169[1]
  i2168.distance = i2169[2]
  i2168.sideOffset = i2169[3]
  i2168.speed = i2169[4]
  return i2168
}

Deserializers["RoadGenerator"] = function (request, data, root) {
  var i2170 = root || request.c( 'RoadGenerator' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'fencePiece')
  return i2170
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i2173 = data
  i2172.m_MoveSpeed = i2173[0]
  i2172.m_TurnSpeed = i2173[1]
  i2172.m_RollSpeed = i2173[2]
  i2172.m_FollowVelocity = !!i2173[3]
  i2172.m_FollowTilt = !!i2173[4]
  i2172.m_SpinTurnLimit = i2173[5]
  i2172.m_TargetVelocityLowerLimit = i2173[6]
  i2172.m_SmoothTurnTime = i2173[7]
  request.r(i2173[8], i2173[9], 0, i2172, 'm_Target')
  i2172.m_AutoTargetPlayer = !!i2173[10]
  i2172.m_UpdateType = i2173[11]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2175 = data
  i2174.enabled = !!i2175[0]
  i2174.aspect = i2175[1]
  i2174.orthographic = !!i2175[2]
  i2174.orthographicSize = i2175[3]
  i2174.backgroundColor = new pc.Color(i2175[4], i2175[5], i2175[6], i2175[7])
  i2174.nearClipPlane = i2175[8]
  i2174.farClipPlane = i2175[9]
  i2174.fieldOfView = i2175[10]
  i2174.depth = i2175[11]
  i2174.clearFlags = i2175[12]
  i2174.cullingMask = i2175[13]
  i2174.rect = i2175[14]
  request.r(i2175[15], i2175[16], 0, i2174, 'targetTexture')
  return i2174
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i2176 = root || request.c( 'CameraFollower' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'Target')
  i2176.PositionOffset = new pc.Vec3( i2177[2], i2177[3], i2177[4] )
  i2176.RotationOffset = new pc.Vec3( i2177[5], i2177[6], i2177[7] )
  i2176.CameraSpeed = i2177[8]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2179 = data
  i2178.enabled = !!i2179[0]
  i2178.type = i2179[1]
  i2178.color = new pc.Color(i2179[2], i2179[3], i2179[4], i2179[5])
  i2178.cullingMask = i2179[6]
  i2178.intensity = i2179[7]
  i2178.range = i2179[8]
  i2178.spotAngle = i2179[9]
  i2178.shadows = i2179[10]
  i2178.shadowNormalBias = i2179[11]
  i2178.shadowBias = i2179[12]
  i2178.shadowStrength = i2179[13]
  i2178.lightmapBakeType = i2179[14]
  i2178.renderMode = i2179[15]
  request.r(i2179[16], i2179[17], 0, i2178, 'cookie')
  i2178.cookieSize = i2179[18]
  return i2178
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'm_FirstSelected')
  i2180.m_sendNavigationEvents = !!i2181[2]
  i2180.m_DragThreshold = i2181[3]
  return i2180
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2183 = data
  i2182.m_HorizontalAxis = i2183[0]
  i2182.m_VerticalAxis = i2183[1]
  i2182.m_SubmitButton = i2183[2]
  i2182.m_CancelButton = i2183[3]
  i2182.m_InputActionsPerSecond = i2183[4]
  i2182.m_RepeatDelay = i2183[5]
  i2182.m_ForceModuleActive = !!i2183[6]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2185 = data
  i2184.enabled = !!i2185[0]
  i2184.planeDistance = i2185[1]
  i2184.referencePixelsPerUnit = i2185[2]
  i2184.isFallbackOverlay = !!i2185[3]
  i2184.renderMode = i2185[4]
  i2184.renderOrder = i2185[5]
  i2184.sortingLayerName = i2185[6]
  i2184.sortingOrder = i2185[7]
  i2184.scaleFactor = i2185[8]
  request.r(i2185[9], i2185[10], 0, i2184, 'worldCamera')
  i2184.overrideSorting = !!i2185[11]
  i2184.pixelPerfect = !!i2185[12]
  i2184.targetDisplay = i2185[13]
  i2184.overridePixelPerfect = !!i2185[14]
  return i2184
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2187 = data
  i2186.m_UiScaleMode = i2187[0]
  i2186.m_ReferencePixelsPerUnit = i2187[1]
  i2186.m_ScaleFactor = i2187[2]
  i2186.m_ReferenceResolution = new pc.Vec2( i2187[3], i2187[4] )
  i2186.m_ScreenMatchMode = i2187[5]
  i2186.m_MatchWidthOrHeight = i2187[6]
  i2186.m_PhysicalUnit = i2187[7]
  i2186.m_FallbackScreenDPI = i2187[8]
  i2186.m_DefaultSpriteDPI = i2187[9]
  i2186.m_DynamicPixelsPerUnit = i2187[10]
  return i2186
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2189 = data
  i2188.m_IgnoreReversedGraphics = !!i2189[0]
  i2188.m_BlockingObjects = i2189[1]
  i2188.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2189[2] )
  return i2188
}

Deserializers["Countdown"] = function (request, data, root) {
  var i2190 = root || request.c( 'Countdown' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'CountdownText')
  request.r(i2191[2], i2191[3], 0, i2190, 'Go_Image')
  request.r(i2191[4], i2191[5], 0, i2190, 'Outline')
  request.r(i2191[6], i2191[7], 0, i2190, 'MainWindow')
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2193 = data
  i2192.m_Alpha = i2193[0]
  i2192.m_Interactable = !!i2193[1]
  i2192.m_BlocksRaycasts = !!i2193[2]
  i2192.m_IgnoreParentGroups = !!i2193[3]
  i2192.enabled = !!i2193[4]
  return i2192
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2195 = data
  i2194.m_EffectColor = new pc.Color(i2195[0], i2195[1], i2195[2], i2195[3])
  i2194.m_EffectDistance = new pc.Vec2( i2195[4], i2195[5] )
  i2194.m_UseGraphicAlpha = !!i2195[6]
  return i2194
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i2196 = root || request.c( 'WinScreenWidget' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'RaceCar')
  request.r(i2197[2], i2197[3], 0, i2196, 'WheatText')
  request.r(i2197[4], i2197[5], 0, i2196, 'GemText')
  request.r(i2197[6], i2197[7], 0, i2196, 'GameManager')
  request.r(i2197[8], i2197[9], 0, i2196, 'products')
  return i2196
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i2198 = root || request.c( 'EndGameButton' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'GameManager')
  return i2198
}

Deserializers["LongTapButton"] = function (request, data, root) {
  var i2200 = root || request.c( 'LongTapButton' )
  var i2201 = data
  i2200.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i2201[0], i2200.OnMouseDownEvent)
  i2200.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i2201[1], i2200.OnMouseUpEvent)
  return i2200
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2203 = data
  i2202.m_Spacing = i2203[0]
  i2202.m_ChildForceExpandWidth = !!i2203[1]
  i2202.m_ChildForceExpandHeight = !!i2203[2]
  i2202.m_ChildControlWidth = !!i2203[3]
  i2202.m_ChildControlHeight = !!i2203[4]
  i2202.m_ChildScaleWidth = !!i2203[5]
  i2202.m_ChildScaleHeight = !!i2203[6]
  i2202.m_Padding = UnityEngine.RectOffset.FromPaddings(i2203[7], i2203[8], i2203[9], i2203[10])
  i2202.m_ChildAlignment = i2203[11]
  return i2202
}

Deserializers["BoostsPanelCtrl"] = function (request, data, root) {
  var i2204 = root || request.c( 'BoostsPanelCtrl' )
  var i2205 = data
  request.r(i2205[0], i2205[1], 0, i2204, 'boosts')
  request.r(i2205[2], i2205[3], 0, i2204, 'wgtBoostPrefab')
  return i2204
}

Deserializers["CheatSpeedTuning"] = function (request, data, root) {
  var i2206 = root || request.c( 'CheatSpeedTuning' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'txtSpeed')
  request.r(i2207[2], i2207[3], 0, i2206, 'slider')
  return i2206
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i2208 = root || request.c( 'TimeSinceStartup' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'Text')
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2211 = data
  i2210.name = i2211[0]
  i2210.atlasId = i2211[1]
  i2210.mipmapCount = i2211[2]
  i2210.hdr = !!i2211[3]
  i2210.size = i2211[4]
  i2210.anisoLevel = i2211[5]
  i2210.filterMode = i2211[6]
  i2210.wrapMode = i2211[7]
  var i2213 = i2211[8]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 4) {
    i2212.push( UnityEngine.Rect.MinMaxRect(i2213[i + 0], i2213[i + 1], i2213[i + 2], i2213[i + 3]) );
  }
  i2210.rects = i2212
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2217 = data
  i2216.name = i2217[0]
  i2216.index = i2217[1]
  i2216.startup = !!i2217[2]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2219 = data
  i2218.ambientIntensity = i2219[0]
  i2218.reflectionIntensity = i2219[1]
  i2218.ambientMode = i2219[2]
  i2218.ambientLight = new pc.Color(i2219[3], i2219[4], i2219[5], i2219[6])
  i2218.ambientSkyColor = new pc.Color(i2219[7], i2219[8], i2219[9], i2219[10])
  i2218.ambientGroundColor = new pc.Color(i2219[11], i2219[12], i2219[13], i2219[14])
  i2218.ambientEquatorColor = new pc.Color(i2219[15], i2219[16], i2219[17], i2219[18])
  i2218.fogColor = new pc.Color(i2219[19], i2219[20], i2219[21], i2219[22])
  i2218.fogEndDistance = i2219[23]
  i2218.fogStartDistance = i2219[24]
  i2218.fogDensity = i2219[25]
  i2218.fog = !!i2219[26]
  request.r(i2219[27], i2219[28], 0, i2218, 'skybox')
  i2218.fogMode = i2219[29]
  var i2221 = i2219[30]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2221[i + 0]) );
  }
  i2218.lightmaps = i2220
  i2218.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2219[31], i2218.lightProbes)
  i2218.lightmapsMode = i2219[32]
  i2218.environmentLightingMode = i2219[33]
  i2218.ambientProbe = new pc.SphericalHarmonicsL2(i2219[34])
  request.r(i2219[35], i2219[36], 0, i2218, 'customReflection')
  request.r(i2219[37], i2219[38], 0, i2218, 'defaultReflection')
  i2218.defaultReflectionMode = i2219[39]
  i2218.defaultReflectionResolution = i2219[40]
  i2218.sunLightObjectId = i2219[41]
  i2218.pixelLightCount = i2219[42]
  i2218.defaultReflectionHDR = !!i2219[43]
  i2218.hasLightDataAsset = !!i2219[44]
  i2218.hasManualGenerate = !!i2219[45]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2225 = data
  request.r(i2225[0], i2225[1], 0, i2224, 'lightmapColor')
  request.r(i2225[2], i2225[3], 0, i2224, 'lightmapDirection')
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2226 = root || new UnityEngine.LightProbes()
  var i2227 = data
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2235 = data
  i2234.name = i2235[0]
  var i2237 = i2235[1]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2237[i + 0]) );
  }
  i2234.passes = i2236
  var i2239 = i2235[2]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2239[i + 0]) );
  }
  i2234.defaultParameterValues = i2238
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2242 = root || new pc.UnityShaderPass()
  var i2243 = data
  i2242.passType = i2243[0]
  i2242.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[1], i2242.zTest)
  i2242.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[2], i2242.zWrite)
  i2242.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[3], i2242.culling)
  i2242.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2243[4], i2242.blending)
  i2242.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2243[5], i2242.alphaBlending)
  i2242.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[6], i2242.colorWriteMask)
  i2242.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[7], i2242.offsetUnits)
  i2242.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[8], i2242.offsetFactor)
  i2242.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[9], i2242.stencilRef)
  i2242.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[10], i2242.stencilReadMask)
  i2242.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[11], i2242.stencilWriteMask)
  i2242.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2243[12], i2242.stencilOp)
  i2242.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2243[13], i2242.stencilOpFront)
  i2242.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2243[14], i2242.stencilOpBack)
  var i2245 = i2243[15]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2245[i + 0]) );
  }
  i2242.tags = i2244
  var i2247 = i2243[16]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2247[i + 0]) );
  }
  i2242.variants = i2246
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2249 = data
  i2248.val = i2249[0]
  i2248.name = i2249[1]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2251 = data
  i2250.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2251[0], i2250.src)
  i2250.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2251[1], i2250.dst)
  i2250.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2251[2], i2250.op)
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2253 = data
  i2252.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[0], i2252.pass)
  i2252.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[1], i2252.fail)
  i2252.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[2], i2252.zFail)
  i2252.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[3], i2252.comp)
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2257 = data
  i2256.name = i2257[0]
  i2256.value = i2257[1]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2261 = data
  var i2263 = i2261[0]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( i2263[i + 0] );
  }
  i2260.keywords = i2262
  i2260.vertexProgram = i2261[1]
  i2260.fragmentProgram = i2261[2]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2269 = data
  i2268.name = i2269[0]
  i2268.type = i2269[1]
  i2268.value = new pc.Vec4( i2269[2], i2269[3], i2269[4], i2269[5] )
  i2268.textureValue = i2269[6]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2271 = data
  i2270.name = i2271[0]
  request.r(i2271[1], i2271[2], 0, i2270, 'texture')
  i2270.aabb = i2271[3]
  i2270.vertices = i2271[4]
  i2270.triangles = i2271[5]
  i2270.textureRect = UnityEngine.Rect.MinMaxRect(i2271[6], i2271[7], i2271[8], i2271[9])
  i2270.packedRect = UnityEngine.Rect.MinMaxRect(i2271[10], i2271[11], i2271[12], i2271[13])
  i2270.border = new pc.Vec4( i2271[14], i2271[15], i2271[16], i2271[17] )
  i2270.transparency = i2271[18]
  i2270.bounds = i2271[19]
  i2270.pixelsPerUnit = i2271[20]
  i2270.textureWidth = i2271[21]
  i2270.textureHeight = i2271[22]
  i2270.nativeSize = new pc.Vec2( i2271[23], i2271[24] )
  i2270.pivot = new pc.Vec2( i2271[25], i2271[26] )
  i2270.textureRectOffset = new pc.Vec2( i2271[27], i2271[28] )
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2273 = data
  i2272.name = i2273[0]
  i2272.wrapMode = i2273[1]
  i2272.isLooping = !!i2273[2]
  i2272.length = i2273[3]
  var i2275 = i2273[4]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2275[i + 0]) );
  }
  i2272.curves = i2274
  var i2277 = i2273[5]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2277[i + 0]) );
  }
  i2272.events = i2276
  i2272.halfPrecision = !!i2273[6]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2281 = data
  i2280.path = i2281[0]
  i2280.componentType = i2281[1]
  i2280.property = i2281[2]
  i2280.keys = i2281[3]
  var i2283 = i2281[4]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2283[i + 0]) );
  }
  i2280.objectReferenceKeys = i2282
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2287 = data
  i2286.time = i2287[0]
  request.r(i2287[1], i2287[2], 0, i2286, 'value')
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2291 = data
  i2290.functionName = i2291[0]
  i2290.floatParameter = i2291[1]
  i2290.intParameter = i2291[2]
  i2290.stringParameter = i2291[3]
  request.r(i2291[4], i2291[5], 0, i2290, 'objectReferenceParameter')
  i2290.time = i2291[6]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2293 = data
  i2292.name = i2293[0]
  i2292.ascent = i2293[1]
  i2292.originalLineHeight = i2293[2]
  i2292.fontSize = i2293[3]
  var i2295 = i2293[4]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2295[i + 0]) );
  }
  i2292.characterInfo = i2294
  request.r(i2293[5], i2293[6], 0, i2292, 'texture')
  i2292.originalFontSize = i2293[7]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2299 = data
  i2298.index = i2299[0]
  i2298.advance = i2299[1]
  i2298.bearing = i2299[2]
  i2298.glyphWidth = i2299[3]
  i2298.glyphHeight = i2299[4]
  i2298.minX = i2299[5]
  i2298.maxX = i2299[6]
  i2298.minY = i2299[7]
  i2298.maxY = i2299[8]
  i2298.uvBottomLeftX = i2299[9]
  i2298.uvBottomLeftY = i2299[10]
  i2298.uvBottomRightX = i2299[11]
  i2298.uvBottomRightY = i2299[12]
  i2298.uvTopLeftX = i2299[13]
  i2298.uvTopLeftY = i2299[14]
  i2298.uvTopRightX = i2299[15]
  i2298.uvTopRightY = i2299[16]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2301 = data
  i2300.name = i2301[0]
  var i2303 = i2301[1]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2303[i + 0]) );
  }
  i2300.states = i2302
  var i2305 = i2301[2]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2305[i + 0]) );
  }
  i2300.layers = i2304
  var i2307 = i2301[3]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2307[i + 0]) );
  }
  i2300.parameters = i2306
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2311 = data
  i2310.cycleOffset = i2311[0]
  i2310.cycleOffsetParameter = i2311[1]
  i2310.cycleOffsetParameterActive = !!i2311[2]
  i2310.mirror = !!i2311[3]
  i2310.mirrorParameter = i2311[4]
  i2310.mirrorParameterActive = !!i2311[5]
  i2310.motionId = i2311[6]
  i2310.nameHash = i2311[7]
  i2310.fullPathHash = i2311[8]
  i2310.speed = i2311[9]
  i2310.speedParameter = i2311[10]
  i2310.speedParameterActive = !!i2311[11]
  i2310.tag = i2311[12]
  i2310.name = i2311[13]
  i2310.writeDefaultValues = !!i2311[14]
  var i2313 = i2311[15]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2313[i + 0]) );
  }
  i2310.transitions = i2312
  var i2315 = i2311[16]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 2) {
  request.r(i2315[i + 0], i2315[i + 1], 2, i2314, '')
  }
  i2310.behaviours = i2314
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2319 = data
  i2318.fullPath = i2319[0]
  i2318.canTransitionToSelf = !!i2319[1]
  i2318.duration = i2319[2]
  i2318.exitTime = i2319[3]
  i2318.hasExitTime = !!i2319[4]
  i2318.hasFixedDuration = !!i2319[5]
  i2318.interruptionSource = i2319[6]
  i2318.offset = i2319[7]
  i2318.orderedInterruption = !!i2319[8]
  i2318.destinationStateNameHash = i2319[9]
  i2318.destinationStateMachineId = i2319[10]
  i2318.isExit = !!i2319[11]
  i2318.mute = !!i2319[12]
  i2318.solo = !!i2319[13]
  var i2321 = i2319[14]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2321[i + 0]) );
  }
  i2318.conditions = i2320
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2327 = data
  i2326.blendingMode = i2327[0]
  i2326.defaultWeight = i2327[1]
  i2326.name = i2327[2]
  i2326.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2327[3], i2326.stateMachine)
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2329 = data
  i2328.id = i2329[0]
  i2328.defaultStateNameHash = i2329[1]
  var i2331 = i2329[2]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2331[i + 0]) );
  }
  i2328.entryTransitions = i2330
  var i2333 = i2329[3]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2333[i + 0]) );
  }
  i2328.anyStateTransitions = i2332
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2337 = data
  i2336.destinationStateNameHash = i2337[0]
  i2336.destinationStateMachineId = i2337[1]
  i2336.isExit = !!i2337[2]
  i2336.mute = !!i2337[3]
  i2336.solo = !!i2337[4]
  var i2339 = i2337[5]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2339[i + 0]) );
  }
  i2336.conditions = i2338
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2343 = data
  i2342.defaultBool = !!i2343[0]
  i2342.defaultFloat = i2343[1]
  i2342.defaultInt = i2343[2]
  i2342.name = i2343[3]
  i2342.nameHash = i2343[4]
  i2342.type = i2343[5]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2345 = data
  i2344.name = i2345[0]
  i2344.bytes64 = i2345[1]
  i2344.data = i2345[2]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2347 = data
  var i2349 = i2347[0]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2349[i + 0]) );
  }
  i2346.files = i2348
  i2346.componentToPrefabIds = i2347[1]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2353 = data
  i2352.path = i2353[0]
  request.r(i2353[1], i2353[2], 0, i2352, 'unityObject')
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2355 = data
  var i2357 = i2355[0]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2357[i + 0]) );
  }
  i2354.scriptsExecutionOrder = i2356
  var i2359 = i2355[1]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2359[i + 0]) );
  }
  i2354.sortingLayers = i2358
  var i2361 = i2355[2]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2361[i + 0]) );
  }
  i2354.cullingLayers = i2360
  i2354.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2355[3], i2354.timeSettings)
  i2354.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2355[4], i2354.physicsSettings)
  i2354.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2355[5], i2354.physics2DSettings)
  i2354.removeShadows = !!i2355[6]
  i2354.autoInstantiatePrefabs = !!i2355[7]
  i2354.enableAutoInstancing = !!i2355[8]
  i2354.lightmapEncodingQuality = i2355[9]
  i2354.desiredColorSpace = i2355[10]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2365 = data
  i2364.name = i2365[0]
  i2364.value = i2365[1]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2369 = data
  i2368.id = i2369[0]
  i2368.name = i2369[1]
  i2368.value = i2369[2]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2373 = data
  i2372.id = i2373[0]
  i2372.name = i2373[1]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2375 = data
  i2374.fixedDeltaTime = i2375[0]
  i2374.maximumDeltaTime = i2375[1]
  i2374.timeScale = i2375[2]
  i2374.maximumParticleTimestep = i2375[3]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2377 = data
  i2376.gravity = new pc.Vec3( i2377[0], i2377[1], i2377[2] )
  i2376.defaultSolverIterations = i2377[3]
  i2376.bounceThreshold = i2377[4]
  i2376.autoSyncTransforms = !!i2377[5]
  i2376.autoSimulation = !!i2377[6]
  var i2379 = i2377[7]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2379[i + 0]) );
  }
  i2376.collisionMatrix = i2378
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.layerId = i2383[1]
  i2382.otherLayerId = i2383[2]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'material')
  i2384.gravity = new pc.Vec2( i2385[2], i2385[3] )
  i2384.positionIterations = i2385[4]
  i2384.velocityIterations = i2385[5]
  i2384.velocityThreshold = i2385[6]
  i2384.maxLinearCorrection = i2385[7]
  i2384.maxAngularCorrection = i2385[8]
  i2384.maxTranslationSpeed = i2385[9]
  i2384.maxRotationSpeed = i2385[10]
  i2384.timeToSleep = i2385[11]
  i2384.linearSleepTolerance = i2385[12]
  i2384.angularSleepTolerance = i2385[13]
  i2384.defaultContactOffset = i2385[14]
  i2384.autoSimulation = !!i2385[15]
  i2384.queriesHitTriggers = !!i2385[16]
  i2384.queriesStartInColliders = !!i2385[17]
  i2384.callbacksOnDisable = !!i2385[18]
  i2384.reuseCollisionCallbacks = !!i2385[19]
  i2384.autoSyncTransforms = !!i2385[20]
  var i2387 = i2385[21]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2387[i + 0]) );
  }
  i2384.collisionMatrix = i2386
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2391 = data
  i2390.enabled = !!i2391[0]
  i2390.layerId = i2391[1]
  i2390.otherLayerId = i2391[2]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2395 = data
  i2394.weight = i2395[0]
  i2394.vertices = i2395[1]
  i2394.normals = i2395[2]
  i2394.tangents = i2395[3]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2399 = data
  i2398.mode = i2399[0]
  i2398.parameter = i2399[1]
  i2398.threshold = i2399[2]
  return i2398
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[51],"97":[57],"98":[34],"99":[34],"100":[34],"101":[34],"102":[34],"103":[34],"104":[34],"105":[106],"107":[106],"108":[106],"109":[106],"110":[106],"111":[106],"112":[106],"113":[106],"114":[106],"115":[106],"116":[106],"117":[106],"118":[106],"119":[57],"120":[10],"121":[122],"123":[122],"78":[18],"13":[15],"124":[18],"83":[33],"37":[35],"36":[45],"38":[35],"125":[126],"127":[18],"128":[24,18],"80":[78],"23":[24,18],"129":[18],"79":[78],"130":[18],"131":[18],"84":[18],"132":[18],"27":[18],"133":[18],"134":[18],"135":[18],"136":[24,18],"137":[24,18],"138":[18],"139":[18],"140":[18],"20":[18],"22":[24,18],"141":[18],"142":[76],"143":[76],"77":[76],"144":[76],"145":[57],"146":[57],"147":[18],"148":[24,18],"149":[10],"150":[24,18],"151":[24,18],"152":[10,24,18],"153":[18,24],"154":[18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","UnselectedColliderDrawer","WheatPieceDestroyer","WheatPieceRandomizer","DisableIfTooFar","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","DamagingObstacle","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","LootableItem","LightPole","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Slider","WheatSliderWidget","UnityEngine.UI.Text","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.LayoutElement","HealthBar","ShieldBar","UnityEngine.GameObject","UIActiveBoost","ShootButtonCtrl","UnityEngine.UI.Button","UnityEngine.Rigidbody","CarController","WheelEffects","CarUserControl","UnityStandardAssets.Vehicles.Car.CarAudio","UnityEngine.BoxCollider","RaceCar","HealthController","Gun","JustWheelMeshes","BlobShadowMovement","UnityEngine.AudioSource","Rocket","Explosion","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DriverDescription","UnityEngine.SkinnedMeshRenderer","TrackHandles","PathCreation.PathCreator","UnityEngine.MeshCollider","FinishTrigger","GameManager","UnityEngine.Camera","Countdown","UnityEngine.CanvasGroup","LongTapButton","TrackContentGenerator","WheatGenerator","RoadGenerator","GhostReader","LunaUIFields","Localization","UnityEngine.TextAsset","Products","Boosts","GhostWriter","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","WinScreenWidget","EndGameButton","UnityEngine.UI.HorizontalLayoutGroup","BoostsPanelCtrl","CheatSpeedTuning","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ButtonInput","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

